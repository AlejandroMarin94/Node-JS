export const LOAD_MOBILES = 'LOAD_MOBILES';
export const SELECT_MOBILE = 'SELECT_MOBILE';

export const loadMobilesAction = (mobilesData) => {
  return {
    type: LOAD_MOBILES,
    payload: {
      mobilesData,
    },
  };
};

export const selectMobileAction = (mobileData) => {
  return {
    type: SELECT_MOBILE,
    payload: {
      mobileData,
    },
  };
};
