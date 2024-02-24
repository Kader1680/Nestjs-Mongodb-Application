import { Controller, Get } from '@nestjs/common';
// Adjust the path as per your project structure
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly externalApiService: ApiService) {}

  @Get('api')
  async getData(): Promise<any> {
    try {
      const data = await this.externalApiService.fetchData();
      return data;
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
