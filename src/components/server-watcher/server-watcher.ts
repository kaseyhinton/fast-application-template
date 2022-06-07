import { get } from "httpie";
import {
  FASTElement,
  observable,
  customElement,
} from "@microsoft/fast-element";
import template from "./template.server-watcher";
import styles from "./styles.server-watcher";

export type Server = {
  name: string;
  ipaddress: string;
  status: string;
};

@customElement({
  name: "server-watcher",
  template,
  styles,
})
class ServerWatcher extends FASTElement {
  @observable newServerName: string = "";
  @observable newServerIP: string = "";
  @observable selectedPingInterval: string = "3600000";
  @observable dialogOpen: boolean = false;
  @observable intervals: Array<number> = [];
  @observable servers: Array<Server> = [];

  constructor() {
    super();
    const serverWatcherList = localStorage.getItem("server-watcher-list");
    this.servers = serverWatcherList ? JSON.parse(serverWatcherList) : [];

    const pingInterval = localStorage.getItem(
      "server-watcher-selected-ping-interval"
    );
    if (pingInterval) {
      this.selectedPingInterval = pingInterval;
    }

    this.servers.forEach((server) => {
      this.runServerWatch(server);
    });

    this.runIntervals();
  }

  runIntervals() {
    this.servers.forEach((server) => {
      const interval = setInterval(() => {
        this.runServerWatch(server);
      }, Number(this.selectedPingInterval));

      this.intervals.push(interval);
    });
  }

  clearIntervals() {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  async runServerWatch(server: Server) {
    const result = await this.getDataFromIP(server.ipaddress);
    const idx = this.servers.findIndex((s) => s.ipaddress === server.ipaddress);
    server.status = result;
    this.servers.splice(idx, 1, JSON.parse(JSON.stringify(server)));
    localStorage.setItem("server-watcher-list", JSON.stringify(this.servers));
  }

  async getDataFromIP(ipaddress: string) {
    try {
      const { data } = await get(
        `https://serverwatch.kaseyhinton.com/server/${ipaddress}`
      );
      return data;
    } catch (err) {
      return "Error";
    }
  }
}

export default ServerWatcher;
