const namespace = "helloTask";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  [namespace]: () => {
    return {
      frequency: 1000 * 10,
    };
  },
};

export const production = {
  [namespace]: () => {
    return {
      frequency: 1000 * 60 * 5,
    };
  },
};
