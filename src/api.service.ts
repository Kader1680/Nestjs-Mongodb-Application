import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {
  async fetchData(): Promise<any> {
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
