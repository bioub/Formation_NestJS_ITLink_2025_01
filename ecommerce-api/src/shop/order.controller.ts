import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders(): OrderEntity[] {
    return this.orderService.getAll();
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): OrderEntity {
    return this.orderService.create(createOrderDto);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string): OrderEntity | null {
    return this.orderService.delete(+id);
  }
}
