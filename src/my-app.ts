import page from "page";
import {
  accentPalette as accentPaletteToken,
  PaletteRGB,
  SwatchRGB,
} from "@microsoft/fast-components";
import {
  fastButton,
  fastTextField,
  fastDialog,
  fastSelect,
  fastOption,
  fastToolbar,
  provideFASTDesignSystem,
} from "@microsoft/fast-components";

provideFASTDesignSystem().register(
  fastButton(),
  fastTextField(),
  fastDialog(),
  fastSelect(),
  fastOption(),
  fastToolbar()
);
import { parseColorHexRGB } from "@microsoft/fast-colors";
import {
  FASTElement,
  html,
  css,
  customElement,
  attr,
} from "@microsoft/fast-element";
import { provideDesignSystem } from "@divriots/starter-furious";

import "./components/server-watcher";

provideDesignSystem().register();

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
@customElement({
  name: "my-app",
  template,
  styles,
})
class MyApp extends FASTElement {
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

export default MyApp;
