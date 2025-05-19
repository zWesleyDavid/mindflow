import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BoardsModule } from './boards/boards.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/mindflow'),
    AuthModule,
    BoardsModule,
    CardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
