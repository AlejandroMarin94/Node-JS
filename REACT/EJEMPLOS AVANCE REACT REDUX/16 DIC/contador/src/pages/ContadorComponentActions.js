export const INCREMENT = 'INCREMENT';
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";


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

export const reset = () => {
  return {
    type: RESET,
    
  };
};
