import { LitElement, html, render } from "lit";
import { guard } from "lit/directives/guard.js";

import "@vaadin/dialog";

class MyDialog extends LitElement {
  static properties = {
    dialogOpened: { type: Boolean, state: true },
    body: { type: Object },
  };

  constructor() {
    super();
    this.dialogOpened = false;
    this.body = html``;
  }

  open() {
    this.dialogOpened = true;
  }

  close() {
    this.dialogOpened = false;
  }

  render() {
    return html`
      <vaadin-dialog
        .opened="${this.dialogOpened}"
        @opened-changed="${(e) => (this.dialogOpened = e.detail.value)}"
        .renderer="${guard([], () => (root) => {
          render(this.body, root);
        })}"
      ></vaadin-dialog>
    `;
  }
}

customElements.define("my-dialog", MyDialog);
