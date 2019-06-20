import { CATEGORIES_LOADED } from '../constants/action-types';

const initialState = {
  categories: [],
  availableBrands: [],
  availableVehicles: [],
  availableModels: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === CATEGORIES_LOADED) {
    return Object.assign({}, state, {
      categories: action.payload,
    });
  }

  return state;
};

export default rootReducer;
