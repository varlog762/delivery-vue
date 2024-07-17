import axios from 'axios';

const BASE_URL = '/src/assets/json/rests.json';

export default {
  async getData(url = BASE_URL) {
    try {
      const response = await axios.get(url);
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
