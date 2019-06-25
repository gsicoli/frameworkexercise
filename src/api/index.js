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

export async function fetchModels(params) {
  const response = await axios.get('/fipe/vehicles', { params });
  return response.data;
}

export async function fetchYears(params) {
  const response = await axios.get('/fipe/models', { params });
  return response.data;
}

export async function fetchVehicle(params) {
  const response = await axios.get('/fipe/vehicle', { params });
  return response.data;
}

export async function saveVehicle(params) {
  const response = await axios.post('/db-access', params);
  return response.status;
}

export default '';
