import { get } from "httpie";
import {
  FASTElement,
  html,
  css,
  repeat,
  observable,
  customElement,
} from "@microsoft/fast-element";
import { TextField } from "@microsoft/fast-components";

export type Server = {
  name: string;
  ipaddress: string;
  status: string;
};

const template = html<ServerWatcher>`
  <h1 spacing-bottom>Server Watcher</h1>

  <horizontal-row between spacing-bottom>
    <fast-button
      @click=${(x, c) => {
        x.dialogOpen = true;
      }}
      appearance="accent"
      >Connect server</fast-button
    >
    <fast-select
      :value=${(x) => x.selectedPingInterval}
      @change=${(x, c) => {
        x.selectedPingInterval = (c?.event?.target as any)?.value;
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
      (x) => x.servers,
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
              c.parent.servers = c.parent.servers.filter(
                (server: Server) => server.ipaddress !== x.ipaddress
              );
              localStorage.setItem(
                "server-watcher-list",
                JSON.stringify(
                  c.parent.servers.filter(
                    (server: Server) => server.ipaddress !== x.ipaddress
                  )
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
        @input=${(x, c) => {
          x.newServerName = (c.event.target! as TextField)?.value;
        }}
        :value=${(x) => x.newServerName}
        placeholder="Name"
      ></fast-text-field>

      <fast-text-field
        @input=${(x, c) => {
          x.newServerIP = (c.event.target! as TextField)?.value;
        }}
        :value=${(x) => x.newServerIP}
        placeholder="IP Address"
      ></fast-text-field>
      <button-container>
        <fast-button @click=${(x) => (x.dialogOpen = false)}>Close</fast-button>
        <fast-button
          @click=${(x) => {
            const newServer = {
              name: x.newServerName,
              ipaddress: x.newServerIP,
              status: "Pending",
            } as Server;

            x.servers.push(newServer);
            x.runServerWatch(newServer);
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

  fast-dialog {
    --dialog-height: auto;
    --dialog-width: auto;
  }

  fast-dialog h2 {
    margin-top: 0;
  }

  button-container {
    display: flex;
    margin-top: 24px;
    justify-content: flex-end;
    gap: 24px;
  }

  [spacing-bottom] {
    margin-bottom: 24px;
  }

  [between] {
    justify-content: space-between;
  }
`;

@customElement({
  name: "server-watcher",
  template,
  styles,
})
class ServerWatcher extends FASTElement {
  @observable newServerName: string = "";
  @observable newServerIP: string = "";
  @observable selectedPingInterval: string = "3600000";
  @observable dialogOpen: boolean = false;
  @observable intervals: Array<number> = [];
  @observable servers: Array<Server> = [];

  constructor() {
    super();
    const serverWatcherList = localStorage.getItem("server-watcher-list");
    this.servers = serverWatcherList ? JSON.parse(serverWatcherList) : [];

    const pingInterval = localStorage.getItem(
      "server-watcher-selected-ping-interval"
    );
    if (pingInterval) {
      this.selectedPingInterval = pingInterval;
    }

    this.servers.forEach((server) => {
      this.runServerWatch(server);
    });

    this.runIntervals();
  }

  runIntervals() {
    this.servers.forEach((server) => {
      const interval = setInterval(() => {
        this.runServerWatch(server);
      }, Number(this.selectedPingInterval));

      this.intervals.push(interval);
    });
  }

  clearIntervals() {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  async runServerWatch(server: Server) {
    const result = await this.getDataFromIP(server.ipaddress);
    const idx = this.servers.findIndex((s) => s.ipaddress === server.ipaddress);
    server.status = result;
    this.servers.splice(idx, 1, JSON.parse(JSON.stringify(server)));
    localStorage.setItem("server-watcher-list", JSON.stringify(this.servers));
  }

  async getDataFromIP(ipaddress: string) {
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

export default ServerWatcher;
