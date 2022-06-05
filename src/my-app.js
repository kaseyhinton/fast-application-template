import { html, LitElement, css, nothing, html } from "lit";
import page from "page";

import "@vaadin/app-layout";
import "@vaadin/app-layout/vaadin-drawer-toggle";
import "@vaadin/icon";
import "@vaadin/icons";
import "@vaadin/tabs";
import "@vaadin/button";
import "@vaadin/horizontal-layout";

//TODO: determine whether fetch or a nodejs call needed and handle accordingly

class MyApp extends LitElement {
  static properties = {
    _page: { type: String, state: true, attribute: false },
  };

  constructor() {
    super();
    this._page = undefined;
  }

  openSnackbar = (text, action = "OK", timeout = 5000) => {
    const snackbar = this.shadowRoot.querySelector("mwc-snackbar");
    if (!snackbar) {
      return;
    }
    snackbar.labelText = text;
    const button = snackbar.querySelector('mwc-button[slot="action"]');
    button.label = action;
    snackbar.timeoutMs = timeout;
    snackbar.open = true;
  };

  async firstUpdated() {
    this.addEventListener("open-snackbar", (event) => {
      this.openSnackbar(event?.text, event?.action, event?.timeout);
    });

    page("/", async () => {
      page.show("/server-watcher");
    });

    page("/server-watcher", (ctx) => {
      this.#changePage("server-watcher", () =>
        import("./components/server-watcher.js")
      );
    });

    page("*", () => {
      this.#changePage("error");
    });

    page.start();
  }

  #changePage(mainPage, importFunction) {
    new Promise(async (res) => {
      this._page = mainPage;

      try {
        await importFunction?.();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch (error) {
        console.warn(error);
      }
      res();
    });
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        font-family: system-ui;
      }

      vaadin-icon {
        box-sizing: border-box;
        margin-inline-end: var(--lumo-space-m);
        padding: var(--lumo-space-xs);
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <vaadin-app-layout primary-section="drawer">
        <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
        <h1 slot="navbar">Software Toolkit</h1>
        <vaadin-tabs slot="drawer" orientation="vertical">
          <vaadin-tab>
            <a tabindex="-1">
              <vaadin-icon icon="vaadin:list"></vaadin-icon>
              <span>Server Watcher</span>
            </a>
          </vaadin-tab>
        </vaadin-tabs>
        <main>
          ${this._page === "server-watcher"
            ? html`<server-watcher></server-watcher>`
            : nothing}
        </main>
      </vaadin-app-layout>

      <mwc-snackbar labelText="">
        <mwc-button slot="action"></mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
  }
}

customElements.define("my-app", MyApp);
