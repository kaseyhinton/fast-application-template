import { html, css, LitElement } from "lit";
import {
  fastButton,
  fastTextField,
  fastDialog,
  fastSelect,
  fastOption,
  fastToolbar,
  fastBadge,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";

provideFASTDesignSystem().register(
  fastButton(),
  fastTextField(),
  fastDialog(),
  fastSelect(),
  fastOption(),
  fastToolbar(),
  fastBadge()
);

class ServerWatcher extends LitElement {
  static properties = {
    newServerName: { type: String, state: true },
    newServerIP: { type: String, state: true },
    selectedPingInterval: { type: String, state: true },
    dialogOpen: { type: Boolean, state: true },
    intervals: { type: Array, state: true },
    servers: { type: Array, state: true },
  };
  constructor() {
    super();
    this.intervals = [];
    this.dialogOpen = false;
    this.newServerName = "";
    this.newServerIp = "";

    const serverWatcherList = localStorage.getItem("server-watcher-list");
    this.servers = serverWatcherList ? JSON.parse(serverWatcherList) : [];

    const pingInterval = localStorage.getItem(
      "server-watcher-selected-ping-interval"
    );
    this.selectedPingInterval = pingInterval ? pingInterval : "3600000";

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

  async runServerWatch(server) {
    const result = await this.getDataFromIP(server.ipaddress);
    const idx = this.servers.findIndex((s) => s.ipaddress === server.ipaddress);
    server.status = result;
    this.servers.splice(idx, 1, JSON.parse(JSON.stringify(server)));
    localStorage.setItem("server-watcher-list", JSON.stringify(this.servers));
    this.requestUpdate("servers");
  }

  async getDataFromIP(ipaddress) {
    try {
      const response = await fetch(
        `https://serverwatch.kaseyhinton.com/server/${ipaddress}`
      );
      return await response.text();
    } catch (err) {
      return "Error";
    }
  }

  static styles = [
    css`
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
        flex-wrap: wrap;
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

      fast-badge {
        --badge-fill-accent: var(--accent-fill-rest);
        --badge-color-white: #ffffff;
      }

      fast-badge[status="Error"],
      fast-badge[status="Offline"] {
        --badge-fill-accent: var(--neutral-foreground-hint);
        --badge-color-white: #ffffff;
      }

      fast-badge {
        display: flex;
        flex: 1 1 auto;
      }

      [spacing-bottom] {
        margin-bottom: 24px;
      }

      [between] {
        justify-content: space-between;
      }

      @media (max-width: 630px) {
        horizontal-row {
          flex-direction: column;
          gap: 24px;
          align-items: flex-end;
        }
      }
    `,
  ];

  render() {
    return html`
      <h1 spacing-bottom>Server Watcher</h1>

      <horizontal-row between spacing-bottom>
        <fast-button
          @click=${() => (this.dialogOpen = true)}
          appearance="accent"
          >Connect server</fast-button
        >
        <fast-select
          .value=${this.selectedPingInterval}
          @change=${(event) => {
            this.selectedPingInterval = event?.target?.value;
            localStorage.setItem(
              "server-watcher-selected-ping-interval",
              this.selectedPingInterval
            );
            this.clearIntervals();
            this.runIntervals();
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
        ${this.servers?.map(
          (server) => html`
            <server-item>
              <server-name> ${server.name} </server-name>
              <server-ip>${server.ipaddress} </server-ip>
              <fast-badge status=${server.status} fill="accent" color="white"
                >${server.status}</fast-badge
              >
              <fast-button
                @click=${() => {
                  this.runServerWatch(server);
                }}
              >
                Run
              </fast-button>
              <fast-button
                @click=${() => {
                  this.servers = this.servers.filter(
                    (s) => s.ipaddress !== server.ipaddress
                  );
                  localStorage.setItem(
                    "server-watcher-list",
                    JSON.stringify(
                      this.servers.filter(
                        (s) => s.ipaddress !== server.ipaddress
                      )
                    )
                  );
                }}
              >
                Delete
              </fast-button>
            </server-item>
          `
        )}
      </server-items>
      <fast-dialog ?hidden=${!this.dialogOpen}>
        <div
          style="width: 350px; padding: 24px; display: flex; flex-direction: column; gap: 24px; color: var(--neutral-foreground-rest);"
        >
          <h2>Server</h2>
          <fast-text-field
            @input=${(event) => {
              this.newServerName = event.target?.value;
            }}
            ?value=${this.newServerName}
            placeholder="Name"
          ></fast-text-field>

          <fast-text-field
            @input=${(event) => {
              this.newServerIP = event.target?.value;
            }}
            .value=${this.newServerIP}
            placeholder="IP Address"
          ></fast-text-field>
          <button-container>
            <fast-button @click=${() => (this.dialogOpen = false)}
              >Close</fast-button
            >
            <fast-button
              @click=${() => {
                const newServer = {
                  name: this.newServerName,
                  ipaddress: this.newServerIP,
                  status: "Pending",
                };

                this.servers.push(newServer);
                this.runServerWatch(newServer);
                this.newServerName = "";
                this.newServerIP = "";
                this.dialogOpen = false;
              }}
              appearance="accent"
              >Add</fast-button
            >
          </button-container>
        </div>
      </fast-dialog>
    `;
  }
}

customElements.define("server-watcher", ServerWatcher);
