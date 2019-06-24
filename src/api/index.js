import axios from 'axios';

export async function fetchCategories() {
  const response = await axios.get('/fipe/categories');
  return response.data;
}

export async function fetchBrands(category) {
  const response = await axios.get('/fipe/brands', {
    params: { category },
  });
  return response.data;
}

export default '';
