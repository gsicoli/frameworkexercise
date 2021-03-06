import {
  CATEGORIES_REQUESTED,
  BRANDS_REQUESTED,
  MODELS_REQUESTED,
  YEARS_REQUESTED,
  YEARS_CHOSEN,
  VEHICLE_REQUESTED,
  SAVE_VEHICLE,
  SAVED_VEHICLES_REQUESTED,
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
  return { type: YEARS_CHOSEN, payload: { params } };
}

export function getVehicle(params) {
  return { type: VEHICLE_REQUESTED, payload: { params } };
}

export function saveVehicle(vehicle) {
  return { type: SAVE_VEHICLE, payload: { vehicle } };
}

export function getSavedVehicle() {
  return { type: SAVED_VEHICLES_REQUESTED };
}

export default '';
