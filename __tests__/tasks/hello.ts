import { Process, task, specHelper } from "actionhero";
const actionhero = new Process();
let api;

describe("Task", () => {
  describe("hello", () => {
    beforeAll(async () => {
      api = await actionhero.start();
    });

    afterAll(async () => {
      await actionhero.stop();
    });

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    test("can be enqueued", async () => {
      await task.enqueue("hello", {});
      const found = await specHelper.findEnqueuedTasks("hello");
      expect(found.length).toEqual(1);
      expect(found[0].timestamp).toBeNull();
    });
  });
});
