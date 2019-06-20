import axios from 'axios';

async function fetchCategories() {
  const response = await axios.get('/fipe/categories');
  return response.data;
}

export default { fetchCategories };
