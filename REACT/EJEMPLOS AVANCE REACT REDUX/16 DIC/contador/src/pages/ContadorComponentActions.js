export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const MODIFY_COUNT_NAME = 'MODIFY_COUNT_NAME';
export const MODIFY_CREATOR_NAME = 'MODIFY_CREATOR_NAME';

export const incrementCount = (newValue) => {
  return {
    type: INCREMENT,
    payload: {
      newValue,
    },
  };
};

export const decrementCount = (newValue) => {
  return {
    type: DECREMENT,
    payload: {
      newValue,
    },
  };
};

export const resetCount = (newValue) => {
  return {
    type: RESET,
    payload: {
      newValue,
    },
  };
};

export const modifyCountName = (newName) => {
  return {
    type: MODIFY_COUNT_NAME,
    payload: {
      newName,
    },
  };
};

export const modifyCreatorName = (newName) => {
  return {
    type: MODIFY_CREATOR_NAME,
    payload: {
      newName,
    },
  };
};
