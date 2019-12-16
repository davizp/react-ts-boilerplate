/**
 * DataService Example
 */
import axios, { AxiosInstance } from 'axios';

interface DataService {
  httpService: AxiosInstance,
}

class DataService {
  constructor() {
    const baseURL = process.env.API_URL || '';

    this.httpService = axios.create({
      baseURL: `${baseURL}/employees`,
    });
  }

  findEmployees(filter: string) {
    return this.httpService.get('/find-employees', {
      params: {
        filter,
      },
    });
  }
}

export default DataService;