import { LitElement, html, css, render } from "lit";
import { badge } from "@vaadin/vaadin-lumo-styles/badge";
import { Notification } from "@vaadin/notification";
import { get } from "httpie";

import styles from "../styles/styles";

import "@vaadin/grid";
import "@vaadin/grid/vaadin-grid-sort-column.js";
import "@vaadin/grid/vaadin-grid-column.js";
import "@vaadin/horizontal-layout";
import "@vaadin/vertical-layout";
import "@vaadin/button";
import "@vaadin/text-field";
import "@vaadin/select";
import "./my-dialog";

class ServerWatcher extends LitElement {
  static properties = {
    _dialog: { type: Object, state: true },
    _newserverName: { type: String, state: true },
    _newserverIP: { type: String, state: true },
    items: { type: Array, state: true },
    _selectedPingInterval: { type: String, state: true },
    _intervals: { type: Array, state: true },
    pingIntervals: { type: Array, state: true },
    notificationOpened: { type: Boolean, state: true },
  };

  constructor() {
    super();
    const serverWatcherList = localStorage.getItem("server-watcher-list");
    this.items = serverWatcherList ? JSON.parse(serverWatcherList) : [];

    this._selectedPingInterval =
      localStorage.getItem("server-watcher-selected-ping-interval") ??
      undefined;

    this.pingIntervals = [
      {
        label: "Every minute",
        value: "60000",
      },
      {
        label: "Every 5 minutes",
        value: "300000",
      },
      {
        label: "Every 10 minutes",
        value: "600000",
      },
      {
        label: "Every 30 minutes",
        value: "1800000",
      },
      {
        label: "Every hour",
        value: "3600000",
      },
    ];

    this.items.forEach((item) => {
      this.runServerWatch(item);
    });

    this._intervals = [];
    this.runIntervals();
  }

  firstUpdated() {
    this._dialog = this.shadowRoot?.querySelector("my-dialog");
  }

  runIntervals() {
    this.items.forEach((item) => {
      const interval = setInterval(() => {
        this.runServerWatch(item);
      }, this._selectedPingInterval);

      this._intervals.push(interval);
    });
  }

  clearIntervals() {
    this._intervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  async runServerWatch(server) {
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

  openNotification(message, theme, position) {
    const notification = Notification.show(message, {
      position,
    });
    notification.setAttribute("theme", theme);
    this.notificationOpened = true;
    const handleOpenChanged = (event) => {
      if (!event.detail.value) {
        this.notificationOpened = false;
        notification.removeEventListener("opened-changed", handleOpenChanged);
      }
    };
    notification.addEventListener("opened-changed", handleOpenChanged);
  }

  static styles = [
    styles,
    badge,
    css`
      vaadin-horizontal-layout[action-bar] {
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 24px;
      }

      main {
        margin: 24px 0;
      }
    `,
  ];
  render() {
    return html`
      <h1>Server Watcher</h1>

      <vaadin-horizontal-layout action-bar theme="between">
        <vaadin-button
          connect
          theme="secondary"
          @click="${() => this._dialog.open()}"
          >Connect server</vaadin-button
        >
        <vaadin-select
          label="Ping Interval"
          .items="${this.pingIntervals}"
          @value-changed=${(event) => {
            this._selectedPingInterval = event.target.value;
            localStorage.setItem(
              "server-watcher-selected-ping-interval",
              event.target.value
            );
            this.clearIntervals();
            this.runIntervals();
          }}
          .value="${this._selectedPingInterval ??
          this.pingIntervals[this.pingIntervals.length - 1].value}"
        ></vaadin-select>
      </vaadin-horizontal-layout>

      <vaadin-grid .items="${this.items}">
        <vaadin-grid-sort-column
          header="Name"
          path="name"
          auto-width
        ></vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          header="IP Address"
          path="ipaddress"
          auto-width
        ></vaadin-grid-sort-column>
        <vaadin-grid-column
          header="Status"
          .renderer="${this.statusRenderer}"
          auto-width
        ></vaadin-grid-column>
        <vaadin-grid-column
          header="Actions"
          .renderer="${this.actionsRenderer}"
          auto-width
        ></vaadin-grid-column>
      </vaadin-grid>

      <my-dialog
        header="server"
        .body=${html`
          <vaadin-vertical-layout
            style=" align-items: stretch;width: 300px;max-width: 100%;"
          >
            <style>
              h1 {
                margin: 0;
              }
              main {
                margin: 0 0 24px 0;
                display: flex;
                flex-direction: column;
              }
            </style>
            <h1>server</h1>
            <main>
              <vaadin-text-field
                .value=${this._newserverName}
                @input=${(event) => {
                  this._newserverName = event.target.value;
                }}
                label="Name"
              ></vaadin-text-field>
              <vaadin-text-field
                .value=${this._newserverName}
                @input=${(event) => {
                  this._newserverIP = event.target.value;
                }}
                label="IP Address"
              ></vaadin-text-field>
            </main>

            <vaadin-horizontal-layout
              style="justify-content: end;"
              theme="spacing"
            >
              <vaadin-button @click="${() => this._dialog.close()}">
                Cancel
              </vaadin-button>
              <vaadin-button
                theme="primary"
                @click="${() => {
                  this.items = [
                    ...this.items,
                    {
                      name: this._newserverName,
                      ipaddress: this._newserverIP,
                      status: "Pending",
                    },
                  ];

                  const item = this.items.find(
                    (i) => i.ipaddress === this._newserverIP
                  );
                  this.runServerWatch(item);

                  this._newserverName = "";
                  this._newserverIP = "";
                  this._dialog.close();
                }}"
              >
                Add
              </vaadin-button>
            </vaadin-horizontal-layout>
          </vaadin-vertical-layout>
        `}
        @opened-changed=${(e) => {
          console.log("open changed", e);
        }}
      >
      </my-dialog>
    `;
  }

  actionsRenderer = (root, _, model) => {
    const server = model.item;
    render(
      html`
        <vaadin-horizontal-layout theme="spacing">
          <vaadin-button
            @click=${async () => {
              this.openNotification(
                `Running ${server.ipaddress}`,
                "primary",
                "top-end"
              );
              this.runServerWatch(server);
            }}
            title="Run"
            theme="icon"
            aria-label="Close"
          >
            <vaadin-icon icon="vaadin:refresh"></vaadin-icon>
          </vaadin-button>
          <vaadin-button
            @click=${() => {
              //TODO: open modal with textarea to take script to run
              // If no script present fallback to ping
            }}
            title="Script"
            theme="icon"
            aria-label="Script"
          >
            <vaadin-icon icon="vaadin:file-code"></vaadin-icon>
          </vaadin-button>
          <vaadin-button
            @click=${() => {
              this.items = this.items.filter(
                (i) => i.ipaddress !== server.ipaddress
              );
              localStorage.setItem(
                "server-watcher-list",
                JSON.stringify(this.items)
              );
            }}
            title="Delete"
            theme="icon error"
            aria-label="Close"
          >
            <vaadin-icon icon="vaadin:trash"></vaadin-icon>
          </vaadin-button>
        </vaadin-horizontal-layout>
      `,
      root
    );
  };

  statusRenderer = (root, _, model) => {
    const server = model.item;
    render(
      html`
        <span
          theme="badge ${server.status === "Online" ||
          server.status === "Pending"
            ? "success"
            : "error"}"
          >${server.status}</span
        >
      `,
      root
    );
  };
}

customElements.define("server-watcher", ServerWatcher);
