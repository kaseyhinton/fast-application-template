import page from "page";
import {
  accentPalette as accentPaletteToken,
  PaletteRGB,
  SwatchRGB,
} from "@microsoft/fast-components";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import {
  FASTElement,
  html,
  css,
  customElement,
  attr,
  when,
} from "@microsoft/fast-element";
import {
  fastTab,
  fastTabs,
  fastTabPanel,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";

provideFASTDesignSystem().register(fastTab(), fastTabs(), fastTabPanel());
import { provideDesignSystem } from "@divriots/starter-furious";

import "./components/server-watcher/index.ts";

provideDesignSystem().register();

const template = html`
  <fast-toolbar>
    <h3>servertools.kaseyhinton.com</h3>
  </fast-toolbar>
  <fast-tabs>
    <fast-tab slot="tab">Watcher</fast-tab>
    <fast-tab slot="tab">Details</fast-tab>
    <fast-tab slot="tab">Controls</fast-tab>
    <fast-tab-panel slot="tabpanel">
      ${when(
        (x) => x.page === "server-watcher",
        html`<server-watcher></server-watcher>`
      )}
    </fast-tab-panel>
    <fast-tab-panel slot="tabpanel">Server Details</fast-tab-panel>
    <fast-tab-panel slot="tabpanel">Server Controls</fast-tab-panel>
  </fast-tabs>
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
@customElement({
  name: "app-main",
  template,
  styles,
})
class AppMain extends FASTElement {
  @attr page = "";

  connectedCallback() {
    super.connectedCallback();

    const color = parseColorHexRGB("#335599");
    if (color) {
      const swatch = SwatchRGB.from(color);
      const palette = PaletteRGB.create(swatch);
      accentPaletteToken.setValueFor(this, palette);
    }

    page("/", async () => {
      page.show("/server-watcher");
    });

    page("/server-watcher", () => {
      this.page = "server-watcher";
    });

    page("*", () => {
      this.page = "error";
    });

    page.start();
  }
}

export default AppMain;
