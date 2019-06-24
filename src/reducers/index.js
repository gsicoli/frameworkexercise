import { SELECTOR_PLACEHOLDER } from '../constants';
import {
  CATEGORIES_LOADED,
  BRANDS_REQUESTED,
  BRANDS_LOADED,
  VEHICLES_REQUESTED,
  VEHICLES_LOADED,
  MODELS_REQUESTED,
} from '../constants/action-types';

const initialState = {
  selectedCategory: '',
  selectedBrand: '',
  categories: [],
  availableBrands: [],
  availableVehicles: [],
  availableModels: [],
  brandsDisabled: true,
  vehiclesDisabled: true,
  selectValueBrand: SELECTOR_PLACEHOLDER,
  selectValueVehicles: SELECTOR_PLACEHOLDER,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === CATEGORIES_LOADED) {
    return Object.assign({}, state, {
      categories: action.payload,
    });
  }

  if (action.type === BRANDS_REQUESTED) {
    return Object.assign({}, state, {
      selectedCategory: action.payload.category,
    });
  }

  if (action.type === BRANDS_LOADED) {
    return Object.assign({}, state, {
      availableBrands: action.payload,
      selectValueBrand: SELECTOR_PLACEHOLDER,
      selectValueVehicles: SELECTOR_PLACEHOLDER,
      brandsDisabled: false,
      vehiclesDisabled: true,
    });
  }

  if (action.type === VEHICLES_REQUESTED) {
    return Object.assign({}, state, {
      selectValueBrand: action.payload.id,
    });
  }

  if (action.type === VEHICLES_LOADED) {
    return Object.assign({}, state, {
      availableVehicles: action.payload,
      selectValueVehicles: SELECTOR_PLACEHOLDER,
      vehiclesDisabled: false,
    });
  }

  if (action.type === MODELS_REQUESTED) {
    return Object.assign({}, state, {
      selectValueVehicles: action.payload.idModel,
    });
  }

  return state;
};

export default rootReducer;
