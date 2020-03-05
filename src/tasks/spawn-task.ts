import { Task, task, config } from "actionhero";

export class MyTask extends Task {
  constructor() {
    super();
    this.name = "spawn-task";
    this.description = "an actionhero task";
    this.frequency = config.helloTask.frequency;
    this.queue = "default";
    this.middleware = [];
    this.inputs = {};
  }

  async run() {
    var sleepArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (const i in sleepArray) {
      const number = sleepArray[i];
      await task.enqueueIn(number * 1000, "print-message", {
        message: "Hello!"
      });
    }
  }
}
