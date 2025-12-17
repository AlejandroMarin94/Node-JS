import { LOAD_MOBILES, SELECT_MOBILE } from './MobileComponentActions';

const initialState = {
  mobiles: [],
  mobileSelected: undefined,
};

const mobileComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOBILES:
      return {
        ...state,
        mobiles: action.payload.mobilesData,
      };
    case SELECT_MOBILE:
      return {
        ...state,
        mobileSelected: action.payload.mobileData,
      };
    default:
      return state;
  }
};

export default mobileComponentReducer;
