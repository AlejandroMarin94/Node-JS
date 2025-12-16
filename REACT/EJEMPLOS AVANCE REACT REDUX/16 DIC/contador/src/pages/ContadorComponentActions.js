export const INCREMENT = 'INCREMENT';

export const incrementCount = (newValue) => {
  return {
    type: INCREMENT,
    payload: {
      newValue,
    },
  };
};
