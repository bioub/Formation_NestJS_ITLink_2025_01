import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  @Get()
  getOrders(): OrderEntity[] {
    // TODO: Implémenter la logique
    return [];
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): OrderEntity {
    // TODO: Implémenter la logique
    return {
      id: 1,
      date: new Date(),
      products: [],
      user: undefined
    };
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string): void {
    // TODO: Implémenter la logique
  }
}
