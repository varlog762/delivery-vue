import axios from 'axios';

export default {
  getData(url) {
    return axios
      .get(url)
      .then(response => response.data)
      .catch(error => error);
  },
};
