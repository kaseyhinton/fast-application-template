import ServerWatcher, { Server } from ".";
import { TextField } from "@microsoft/fast-components";
import { html, repeat } from "@microsoft/fast-element";

const template = html<ServerWatcher>`
  <h1 spacing-bottom>Server Watcher</h1>

  <horizontal-row between spacing-bottom>
    <fast-button @click=${(x) => (x.dialogOpen = true)} appearance="accent"
      >Connect server</fast-button
    >
    <fast-select
      :value=${(x) => x.selectedPingInterval}
      @change=${(x, c) => {
        x.selectedPingInterval = (c?.event?.target as any)?.value;
        localStorage.setItem(
          "server-watcher-selected-ping-interval",
          x.selectedPingInterval
        );
        x.clearIntervals();
        x.runIntervals();
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
    ${repeat(
      (x) => x.servers,
      html`
        <server-item>
          <server-name> ${(x) => x.name} </server-name>
          <server-ip>${(x) => x.ipaddress} </server-ip>
          <fast-badge status=${(x) => x.status} fill="accent" color="white"
            >${(x) => x.status}</fast-badge
          >
          <fast-button
            @click=${(x, c) => {
              c.parent.runServerWatch(x);
            }}
          >
            Run
          </fast-button>
          <fast-button
            @click=${(x, c) => {
              c.parent.servers = c.parent.servers.filter(
                (server: Server) => server.ipaddress !== x.ipaddress
              );
              localStorage.setItem(
                "server-watcher-list",
                JSON.stringify(
                  c.parent.servers.filter(
                    (server: Server) => server.ipaddress !== x.ipaddress
                  )
                )
              );
            }}
          >
            Delete
          </fast-button>
        </server-item>
      `,
      { positioning: true }
    )}
  </server-items>
  <fast-dialog :hidden=${(x) => !x.dialogOpen}>
    <div
      style="width: 350px; padding: 24px; display: flex; flex-direction: column; gap: 24px; color: var(--neutral-foreground-rest);"
    >
      <h2>Server</h2>
      <fast-text-field
        @input=${(x, c) => {
          x.newServerName = (c.event.target! as TextField)?.value;
        }}
        :value=${(x) => x.newServerName}
        placeholder="Name"
      ></fast-text-field>

      <fast-text-field
        @input=${(x, c) => {
          x.newServerIP = (c.event.target! as TextField)?.value;
        }}
        :value=${(x) => x.newServerIP}
        placeholder="IP Address"
      ></fast-text-field>
      <button-container>
        <fast-button @click=${(x) => (x.dialogOpen = false)}>Close</fast-button>
        <fast-button
          @click=${(x) => {
            const newServer = {
              name: x.newServerName,
              ipaddress: x.newServerIP,
              status: "Pending",
            } as Server;

            x.servers.push(newServer);
            x.runServerWatch(newServer);
            x.newServerName = "";
            x.newServerIP = "";
            x.dialogOpen = false;
          }}
          appearance="accent"
          >Add</fast-button
        >
      </button-container>
    </div>
  </fast-dialog>
`;

export default template;
