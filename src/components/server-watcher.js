import { get } from "httpie";
import { FASTElement, html, css, repeat } from "@microsoft/fast-element";

const template = html`
  <h1 spacing-bottom>Server Watcher</h1>

  <horizontal-row between spacing-bottom>
    <fast-button @click=${(x, c) => (x.dialogOpen = true)} appearance="accent"
      >Connect server</fast-button
    >
    <fast-select
      :value=${(x) => x.selectedPingInterval ?? "3600000"}
      @change=${(x, c) => {
        x.selectedPingInterval = c.event.target.value;
        localStorage.setItem(
          "server-watcher-selected-ping-interval",
          x.selectedPingInterval
        );
        x.clearIntervals();
        x.runIntervals();
      }}
    >
      <fast-option value="60000">Every minute</fast-option>
      <fast-option value="300000">Every 5 minutes</fast-option>
      <fast-option value="600000">Every 10 minutes</fast-option>
      <fast-option value="1800000">Every 30 minutes</fast-option>
      <fast-option value="3600000">Every hour</fast-option>
    </fast-select>
  </horizontal-row>
  <server-items>
    ${repeat(
      (x) => x.items,
      html`
        <server-item>
          ${(x) => x.name} ${(x) => x.ipaddress} ${(x) => x.status}
          <fast-button
            @click=${(x, c) => {
              c.parent.runServerWatch(x);
            }}
          >
            Run
          </fast-button>
          <fast-button
            @click=${(x, c) => {
              c.parent.items = c.parent.items.filter(
                (i) => i.ipaddress !== x.ipaddress
              );
              localStorage.setItem(
                "server-watcher-list",
                JSON.stringify(
                  c.parent.items.filter((i) => i.ipaddress !== x.ipaddress)
                )
              );
            }}
          >
            Delete
          </fast-button>
        </server-item>
      `,
      { positioning: true }
    )}
  </server-items>
  <fast-dialog :hidden=${(x) => !x.dialogOpen}>
    <div
      style="width: 350px; padding: 24px; display: flex; flex-direction: column; gap: 24px; color: var(--neutral-foreground-rest);"
    >
      <h2>Server</h2>
      <fast-text-field
        style="width: 100%"
        @input=${(x, c) => {
          x.newServerName = c.event.target.value;
        }}
        :value=${(x) => x.newServerName}
        placeholder="Name"
      ></fast-text-field>

      <fast-text-field
        @input=${(x, c) => {
          x.newServerIP = c.event.target.value;
        }}
        :value=${(x) => x.newServerIP}
        placeholder="IP Address"
      ></fast-text-field>
      <button-container>
        <fast-button @click=${(x) => (x.dialogOpen = false)}>Close</fast-button>
        <fast-button
          @click=${(x, c) => {
            x.items = [
              ...x.items,
              {
                name: x._newServerName,
                ipaddress: x._newServerIP,
                status: "Pending",
              },
            ];

            const item = x.items.find((i) => i.ipaddress === x._newServerIP);

            x.runServerWatch(item);
            x.newServerName = "";
            x.newServerIP = "";
            x.dialogOpen = false;
          }}
          appearance="accent"
          >Add</fast-button
        >
      </button-container>
    </div>
  </fast-dialog>
`;
const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    margin: 24px;
  }

  server-items {
    display: flex;
    flex-direction: column;
  }

  server-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  horizontal-row {
    display: flex;
    align-items: center;
  }

  [spacing-bottom] {
    margin-bottom: 24px;
  }

  [between] {
    justify-content: space-between;
  }
`;

class ServerWatcher extends FASTElement {
  static definition = {
    name: "server-watcher",
    template,
    styles,
    attributes: [
      "newServerName",
      "newServerIP",
      "items",
      "selectedPingInterval",
      "intervals",
      "dialogOpen",
    ],
  };

  constructor() {
    super();
    const serverWatcherList = localStorage.getItem("server-watcher-list");
    this.items = serverWatcherList ? JSON.parse(serverWatcherList) : [];
    this.selectedPingInterval =
      localStorage.getItem("server-watcher-selected-ping-interval") ?? 3600000;

    this.items.forEach((item) => {
      this.runServerWatch(item);
    });

    this.intervals = [];
    this.runIntervals();
  }

  runIntervals() {
    this.items.forEach((item) => {
      const interval = setInterval(() => {
        this.runServerWatch(item);
      }, this.selectedPingInterval);

      this.intervals.push(interval);
    });
  }

  clearIntervals() {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  async runServerWatch(server) {
    console.log(server);
    const result = await this.getDataFromIP(server.ipaddress);
    const idx = this.items.findIndex((i) => i.ipaddress === server.ipaddress);
    console.log(result);
    server.status = result;
    this.items.splice(idx, 1, server);
    localStorage.setItem("server-watcher-list", JSON.stringify(this.items));
    this.items = [...this.items];
  }

  async getDataFromIP(ipaddress) {
    try {
      const { data } = await get(
        `https://serverwatch.kaseyhinton.com/server/${ipaddress}`
      );
      return data;
    } catch (err) {
      return "Error";
    }
  }
}

FASTElement.define(ServerWatcher);
