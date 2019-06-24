import { SELECTOR_PLACEHOLDER } from '../constants';
import {
  CATEGORIES_LOADED,
  BRANDS_REQUESTED,
  BRANDS_LOADED,
  MODELS_REQUESTED,
  MODELS_LOADED,
  YEARS_REQUESTED,
  YEARS_LOADED,
  VEHICLE_REQUESTED,
} from '../constants/action-types';

const initialState = {
  selectedCategory: '',
  selectedBrand: SELECTOR_PLACEHOLDER,
  selectedModel: SELECTOR_PLACEHOLDER,
  selectedYear: SELECTOR_PLACEHOLDER,
  categories: [],
  availableBrands: [],
  availableModels: [],
  availableYears: [],
  brandsDisabled: true,
  modelsDisabled: true,
  yearsDisabled: true,
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
      selectedBrand: SELECTOR_PLACEHOLDER,
      selectedModel: SELECTOR_PLACEHOLDER,
      selectedYear: SELECTOR_PLACEHOLDER,
      brandsDisabled: false,
      modelsDisabled: true,
      yearsDisabled: true,
    });
  }

  if (action.type === MODELS_REQUESTED) {
    const { id } = action.payload.params;
    return Object.assign({}, state, {
      selectedBrand: id,
    });
  }

  if (action.type === MODELS_LOADED) {
    return Object.assign({}, state, {
      availableModels: action.payload,
      selectedModel: SELECTOR_PLACEHOLDER,
      selectedYear: SELECTOR_PLACEHOLDER,
      modelsDisabled: false,
      yearsDisabled: true,
    });
  }

  if (action.type === YEARS_REQUESTED) {
    const { idModel } = action.payload.params;
    return Object.assign({}, state, {
      selectedModel: idModel,
    });
  }

  if (action.type === YEARS_LOADED) {
    return Object.assign({}, state, {
      availableYears: action.payload,
      selectedYear: SELECTOR_PLACEHOLDER,
      yearsDisabled: false,
    });
  }

  if (action.type === VEHICLE_REQUESTED) {
    const { idYear } = action.payload.params;
    return Object.assign({}, state, {
      selectedYear: idYear,
    });
  }

  return state;
};

export default rootReducer;
