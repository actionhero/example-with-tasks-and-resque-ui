export const DEFAULT = {
  helloTask: () => {
    return {
      frequency: 1000 * 10,
    };
  },
};

export const production = {
  helloTask: () => {
    return {
      frequency: 1000 * 60 * 5,
    };
  },
};
