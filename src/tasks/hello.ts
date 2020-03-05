import { Task, log, config } from "actionhero";

export class MyTask extends Task {
  constructor() {
    super();
    this.name = "hello";
    this.description = "an actionhero task";
    this.frequency = config.helloTask.frequency;
    this.queue = "default";
    this.middleware = [];
    this.inputs = {};
  }

  async run(data) {
    log("✨✨✨ HELLO!!! ✨✨✨");
  }
}
