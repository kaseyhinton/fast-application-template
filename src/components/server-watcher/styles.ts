import { accentFillRest, neutralColor } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

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

  fast-badge {
    --badge-fill-accent: ${accentFillRest};
    --badge-color-white: #ffffff;
  }

  fast-badge[status="Error"],
  fast-badge[status="Offline"] {
    --badge-fill-accent: ${neutralColor};
    --badge-color-white: #ffffff;
  }

  server-name {
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
`;
export default styles;
