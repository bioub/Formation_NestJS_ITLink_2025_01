import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CategoryController } from './category.controller';
import { OrderController } from './order.controller';
import { ProductService } from './product.service';
import { OrderService } from './order.service';
import { CategoryService } from './category.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [ProductController, CategoryController, OrderController],
  providers: [ProductService, OrderService, CategoryService],
})
export class ShopModule {}
