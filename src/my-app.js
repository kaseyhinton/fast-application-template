import page from "page";
import { parseColorHexRGB } from "@microsoft/fast-colors";

import {
  allComponents,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";
import { provideDesignSystem } from "@divriots/starter-furious";
provideFASTDesignSystem().register(allComponents);
provideDesignSystem().register();

import {
  accentPalette as accentPaletteToken,
  PaletteRGB,
  SwatchRGB,
} from "@microsoft/fast-components";

import { FASTElement, html, css } from "@microsoft/fast-element";
import "./components/server-watcher";

const template = html`
  <fast-toolbar>
    <h3>servertools.kaseyhinton.com</h3>
  </fast-toolbar>
  ${(x) =>
    x.page === "server-watcher" ? html`<server-watcher></server-watcher>` : ""}
`;
const styles = css`
  :host {
    display: block;
    margin-top: 49px;
  }

  fast-toolbar {
    width: 100%;
    padding: 12px;
    top: 0;
    position: fixed;
  }

  :not(:defined) {
    visibility: hidden;
  }
`;

export class MyApp extends FASTElement {
  static definition = {
    name: "my-app",
    template,
    styles,
    attributes: ["page"],
  };

  connectedCallback() {
    super.connectedCallback();

    const color = parseColorHexRGB("#335599");
    const swatch = SwatchRGB.from(color);
    const palette = PaletteRGB.create(swatch);
    accentPaletteToken.setValueFor(this, palette);

    page("/", async () => {
      page.show("/server-watcher");
    });

    page("/server-watcher", (ctx) => {
      this.page = "server-watcher";
    });

    page("*", () => {
      this.page = "error";
    });

    page.start();
  }
}

FASTElement.define(MyApp);

// class MyApp extends LitElement {
//   static properties = {
//     _page: { type: String, state: true, attribute: false },
//   };

//   constructor() {
//     super();
//     this._page = undefined;
//   }

//   openSnackbar = (text, action = "OK", timeout = 5000) => {
//     const snackbar = this.shadowRoot.querySelector("mwc-snackbar");
//     if (!snackbar) {
//       return;
//     }
//     snackbar.labelText = text;
//     const button = snackbar.querySelector('mwc-button[slot="action"]');
//     button.label = action;
//     snackbar.timeoutMs = timeout;
//     snackbar.open = true;
//   };

//   async firstUpdated() {
//     this.addEventListener("open-snackbar", (event) => {
//       this.openSnackbar(event?.text, event?.action, event?.timeout);
//     });

//     page("/", async () => {
//       page.show("/server-watcher");
//     });

//     page("/server-watcher", (ctx) => {
//       this.#changePage("server-watcher", () =>
//         import("./components/server-watcher.js")
//       );
//     });

//     page("*", () => {
//       this.#changePage("error");
//     });

//     page.start();
//   }

//   #changePage(mainPage, importFunction) {
//     new Promise(async (res) => {
//       this._page = mainPage;

//       try {
//         await importFunction?.();
//         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//       } catch (error) {
//         console.warn(error);
//       }
//       res();
//     });
//   }

//   static styles = [
//     css`
//       :host {
//         display: flex;
//         flex-direction: column;
//         font-family: system-ui;
//       }

//       vaadin-icon {
//         box-sizing: border-box;
//         margin-inline-end: var(--lumo-space-m);
//         padding: var(--lumo-space-xs);
//       }

//       [hidden] {
//         display: none !important;
//       }
//     `,
//   ];

//   render() {
//     return html`
//       <fast-button>Hello world</fast-button>
//       <!-- <vaadin-app-layout primary-section="drawer">

//         <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
//         <h1 slot="navbar">Software Toolkit</h1>
//         <vaadin-tabs slot="drawer" orientation="vertical">
//           <vaadin-tab>
//             <a tabindex="-1">
//               <vaadin-icon icon="vaadin:list"></vaadin-icon>
//               <span>Server Watcher</span>
//             </a>
//           </vaadin-tab>
//         </vaadin-tabs>
//         <main>
//           ${this._page === "server-watcher"
//         ? html`<server-watcher></server-watcher>`
//         : nothing}
//         </main>
//       </vaadin-app-layout>

//       <mwc-snackbar labelText="">
//         <mwc-button slot="action"></mwc-button>
//         <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
//       </mwc-snackbar> -->
//     `;
//   }
// }

// customElements.define("my-app", MyApp);
