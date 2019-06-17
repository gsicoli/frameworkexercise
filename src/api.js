import axios from 'axios';

class Api {
  fetchMarcas(tipo) {
    const request = {
      params: { tipo },
    };

    axios.get('/fipe/marcas', request);
  }
}

export default Api;
