import { html, css, LitElement } from "lit";

class ServerDetails extends LitElement {
  static properties = {};
  constructor() {
    super();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px;
      }

      [spacing-bottom] {
        margin-bottom: 24px;
      }
    `,
  ];

  render() {
    return html` <h1 spacing-bottom>Server Details</h1> `;
  }
}

customElements.define("server-details", ServerDetails);
