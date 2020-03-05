import { Initializer, api } from "actionhero";

export class MyInitializer extends Initializer {
  constructor() {
    super();
    this.name = "debug";
    this.loadPriority = 999999999999999999;
    this.startPriority = 999999999999999999;
    this.stopPriority = 999999999999999999;
  }

  async initialize() {
    console.log(api.routes.routes);
  }

  async start() {}

  async stop() {}
}
