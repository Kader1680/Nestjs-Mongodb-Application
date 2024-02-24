import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { UserSchema } from './user.schema';
import { ApiController } from './api.controller';
import { AppService } from './app.service';
import { ApiModule } from './api.module';
import { AppController } from './app.controller';

@Module({
  // imports: [ApiModule]

  // require module databases
  imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  
  controllers: [ApiController, UserController],
  
  providers: [ApiService, UserService],
  
})
export class AppModule {}