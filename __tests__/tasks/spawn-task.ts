import { Process, task, specHelper, api } from "actionhero";
const actionhero = new Process();

describe("Task", () => {
  describe("spawn-task", () => {
    beforeAll(async () => {
      await actionhero.start();
    });

    afterAll(async () => {
      await actionhero.stop();
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    test("can be enqueued", async () => {
      await task.enqueue("spawn-task", {});
      const found = await specHelper.findEnqueuedTasks("spawn-task");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });

    test("running spawn-task will create new print-message tasks", async () => {
      await specHelper.runTask("spawn-task", {});
      const found = await specHelper.findEnqueuedTasks("print-message");
      expect(found.length).toEqual(9);
    });
  });
});
