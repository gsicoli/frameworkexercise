import {
  CATEGORIES_REQUESTED,
  BRANDS_REQUESTED,
  MODELS_REQUESTED,
  YEARS_REQUESTED,
  VEHICLE_REQUESTED,
} from '../constants/action-types';

export function getCategories() {
  return { type: CATEGORIES_REQUESTED };
}

export function categoryChosen(category) {
  return { type: BRANDS_REQUESTED, payload: { category } };
}

export function brandChosen(params) {
  return { type: MODELS_REQUESTED, payload: { params } };
}

export function modelChosen(params) {
  return { type: YEARS_REQUESTED, payload: { params } };
}

export function yearChosen(params) {
  return { type: VEHICLE_REQUESTED, payload: { params } };
}

export default '';
