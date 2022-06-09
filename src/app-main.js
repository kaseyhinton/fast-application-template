import { PaletteRGB, SwatchRGB } from "@microsoft/fast-components";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { html, css, LitElement, nothing } from "lit";
import {
  fastTab,
  fastTabs,
  fastTabPanel,
  provideFASTDesignSystem,
  baseLayerLuminance,
  StandardLuminance,
  accentPalette,
} from "@microsoft/fast-components";
provideFASTDesignSystem().register(fastTab(), fastTabs(), fastTabPanel());

import "./components/server-watcher.js";

class AppMain extends LitElement {
  static properties = {
    page: { type: String, state: true },
  };

  async firstUpdated() {
    const provider = this.shadowRoot.querySelector(
      "fast-design-system-provider"
    );
    baseLayerLuminance.withDefault(StandardLuminance.LightMode);
    accentPalette.withDefault(
      PaletteRGB.from(SwatchRGB.from(parseColorHexRGB("#335599")))
    );

    // neutralBaseColor.withDefault(
    //   SwatchRGB.create(128, 128, 128)
    // );

    const { pathname } = new URL(navigation.currentEntry.url);
    this.changePage(pathname);

    navigation.addEventListener("navigate", (navigateEvent) => {
      const promise = new Promise((resolve) => {
        const { pathname } = new URL(navigateEvent.destination.url);
        this.changePage(pathname, resolve);
      });
      navigateEvent.transitionWhile(promise);
    });
  }

  async changePage(path, resolve) {
    switch (path) {
      case "/server-watcher":
        await import("./components/server-watcher.js");
        this.page = "server-watcher";
        break;
      case "/server-details":
        await import("./components/server-details.js");
        this.page = "server-details";
        break;
      case "/server-controls":
        await import("./components/server-controls.js");
        this.page = "server-controls";
        break;
      default:
        this.page = "error";
        break;
    }
    if (resolve) {
      resolve();
    }
  }

  static styles = [
    css`
      :host {
        display: block;
        margin-top: 49px;
      }

      fast-design-system-provider {
        display: block;
      }

      fast-toolbar {
        width: 100%;
        padding: 12px;
        top: 0;
        position: fixed;
      }
    `,
  ];

  render() {
    return html`
      <fast-design-system-provider>
        <fast-toolbar>
          <h3>servertools.kaseyhinton.com</h3>
        </fast-toolbar>
        <fast-tabs activeid=${this.page}>
          <fast-tab
            id="server-watcher"
            @click=${() => {
              navigation.navigate("/server-watcher");
            }}
            slot="tab"
            >Watcher</fast-tab
          >
          <fast-tab
            id="server-details"
            @click=${() => {
              navigation.navigate("/server-details");
            }}
            slot="tab"
            >Details</fast-tab
          >
          <fast-tab
            id="server-controls"
            @click=${() => {
              navigation.navigate("/server-controls");
            }}
            slot="tab"
            >Controls</fast-tab
          >
          <fast-tab-panel slot="tabpanel">
            ${this.page === "server-watcher"
              ? html`<server-watcher></server-watcher>`
              : nothing}
          </fast-tab-panel>
          <fast-tab-panel slot="tabpanel">
            ${this.page === "server-details"
              ? html`<server-details></server-details>`
              : nothing}
          </fast-tab-panel>
          <fast-tab-panel slot="tabpanel">
            ${this.page === "server-controls"
              ? html`<server-controls></server-controls>`
              : nothing}
          </fast-tab-panel>
        </fast-tabs>
      </fast-design-system-provider>
    `;
  }
}

customElements.define("app-main", AppMain);
