import { Task, log } from "actionhero";

export class MyTask extends Task {
  constructor() {
    super();
    this.name = "print-message";
    this.description = "an actionhero task";
    this.frequency = 0;
    this.queue = "default";
    this.middleware = [];
    this.inputs = {
      message: { required: true }
    };
  }

  async run(data) {
    log(`✨✨✨ ${data.message} ✨✨✨`);
  }
}
