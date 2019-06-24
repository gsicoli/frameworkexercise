import { CATEGORIES_REQUESTED, BRANDS_REQUESTED } from '../constants/action-types';

export function getCategories() {
  return { type: CATEGORIES_REQUESTED };
}

export function categoryChosen(category) {
  return { type: BRANDS_REQUESTED, payload: { category } };
}

export default '';
