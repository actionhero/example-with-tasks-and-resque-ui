export const DEFAULT = {
  helloTask: config => {
    return {
      frequency: 1000 * 10
    };
  }
};

export const production = {
  helloTask: config => {
    return {
      frequency: 1000 * 60 * 5
    };
  }
};
