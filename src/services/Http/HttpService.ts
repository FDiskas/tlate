import axios from 'axios';
export class HttpService {
  axios = axios.create({
    baseURL: 'http://localhost:4321',
  });
  get(path: string) {
    return this.axios.get(path).then(result => result.data);
  }
}
export default new HttpService();
