import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { Card, CardSchema } from './card.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }])
    ],
    providers: [CardsService],
    controllers: [CardsController],
})
export class CardsModule { }
