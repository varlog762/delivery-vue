import axios from 'axios';

const BASE_URL = '/src/assets/json/rests1.json';

export default {
  async getData(url = BASE_URL) {
    try {
      const response = await axios.get(url);

      if (
        response.status !== 200 ||
        response.headers['content-type'] !== 'application/json'
      ) {
        throw new Error('Hello, Bomzhara!');
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async getDataBySlug(slug, url = BASE_URL) {
    const data = await this.getData(url);
    return data.find(item => item.slug === slug);
  },
};
