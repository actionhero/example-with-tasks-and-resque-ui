import { join } from "path";

export const DEFAULT = {
  plugins: () => {
    return {
      "ah-resque-ui": {
        path: join(__dirname, "..", "..", "node_modules", "ah-resque-ui"),
      },
    };
  },
};
