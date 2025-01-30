import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [ConfigModule],
  controllers: [ProductController, CategoryController, OrderController],
  providers: [ProductService, OrderService, CategoryService],
})
export class ShopModule {}
