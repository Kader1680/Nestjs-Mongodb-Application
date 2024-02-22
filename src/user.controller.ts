// user.controller.ts
import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
// import { DataService } from './data.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async store(@Body() body: any) {
    const { firstName, lastName, email, password } = body;
    return this.userService.store(firstName, lastName, email, password);
  }

  @Get()
    async index() {
        try {
            const allData = await this.userService.index();
            return { data: allData }; // Return data as JSON
        } catch (error) {
            throw new Error(`Error while fetching data: ${error.message}`);
        }
    }

  @Get(':id')
    async show(@Param('id') id: string) {
        try {
            const data = await this.userService.show(id);
            if (!data) {
                return { message: 'Data not found' };
            }
            return { data };
        } catch (error) {
            throw new Error(`Error while fetching by id data: ${error.message}`);
        }
    }


    @Put(':id')
    async edit(@Param('id') id: string, @Body() updateData: any) {
        try {
            const updateById = await this.userService.edit(id, updateData);
            if (!updateById) {
                return { message: 'Data not found' };
            }
            return { updateById };
        } catch (error) {
            throw new Error(`Error while edit data: ${error.message}`);
        }
    }

    @Delete(':id')
    async destroy(@Param('id') id: string) {
        try {
            const data = await this.userService.destroy(id);
            if (!data) {
                return { message: 'Data not found' };
            }
            return { data };
        } catch (error) {
            throw new Error(`Error while destroy data: ${error.message}`);
        }
    }
}

