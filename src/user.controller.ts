// user.controller.ts
import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
// import { DataService } from './data.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: any) {
    const { firstName, lastName, email, password } = body;
    return this.userService.createUser(firstName, lastName, email, password);
  }

  @Get()
    async findAll() {
        try {
            const allData = await this.userService.findAll();
            return { data: allData }; // Return data as JSON
        } catch (error) {
            throw new Error(`Error while fetching data: ${error.message}`);
        }
    }

  @Get(':id')
    async findById(@Param('id') id: string) {
        try {
            const data = await this.userService.findById(id);
            if (!data) {
                return { message: 'Data not found' };
            }
            return { data };
        } catch (error) {
            throw new Error(`Error while fetching data: ${error.message}`);
        }
    }


    @Put(':id')
    async updateById(@Param('id') id: string, @Body() updateData: any) {
        try {
            const updateById = await this.userService.updateById(id, updateData);
            if (!updateById) {
                return { message: 'Data not found' };
            }
            return { updateById };
        } catch (error) {
            throw new Error(`Error while deleteById data: ${error.message}`);
        }
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string) {
        try {
            const data = await this.userService.deleteById(id);
            if (!data) {
                return { message: 'Data not found' };
            }
            return { data };
        } catch (error) {
            throw new Error(`Error while deleteById data: ${error.message}`);
        }
    }
}

