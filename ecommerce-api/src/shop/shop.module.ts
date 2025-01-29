import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CategoryController } from './category.controller';
import { OrderController } from './order.controller';

@Module({
  controllers: [ProductController, CategoryController, OrderController],
})
export class ShopModule {}
