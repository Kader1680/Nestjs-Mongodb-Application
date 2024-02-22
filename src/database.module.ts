import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nestjsmongo:nestjsmongo@cluster0.koqwof1.mongodb.net/nestjsmongo'),
  ],
})
export class DatabaseModule {}