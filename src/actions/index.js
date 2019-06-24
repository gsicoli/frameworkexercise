import {
  CATEGORIES_REQUESTED,
  BRANDS_REQUESTED,
  VEHICLES_REQUESTED,
  MODELS_REQUESTED,
} from '../constants/action-types';

export function getCategories() {
  return { type: CATEGORIES_REQUESTED };
}

export function categoryChosen(category) {
  return { type: BRANDS_REQUESTED, payload: { category } };
}

export function brandChosen(params) {
  return { type: VEHICLES_REQUESTED, payload: { params } };
}

export function vehicleChosen(params) {
  return { type: MODELS_REQUESTED, payload: { params } };
}

export default '';
