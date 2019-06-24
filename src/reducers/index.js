import {
  CATEGORIES_LOADED,
  BRANDS_REQUESTED,
  BRANDS_LOADED,
} from '../constants/action-types';

const initialState = {
  selectedCategory: '',
  selectedBrand: '',
  categories: [],
  availableBrands: [],
  availableVehicles: [],
  availableModels: [],
  brandsDisabled: true,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === CATEGORIES_LOADED) {
    return Object.assign({}, state, {
      categories: action.payload,
    });
  }

  if (action.type === BRANDS_REQUESTED) {
    return Object.assign({}, state, {
      selectedCategory: action.payload,
    });
  }

  if (action.type === BRANDS_LOADED) {
    return Object.assign({}, state, {
      availableBrands: action.payload,
      brandsDisabled: false,
    });
  }

  return state;
};

export default rootReducer;
