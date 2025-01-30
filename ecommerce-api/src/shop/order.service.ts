import { Injectable } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';

@Injectable()
export class OrderService {
  private orders: OrderEntity[] = [];

  getAll() {
    return this.orders;
  }

  create(order: any) {
    const newOrder = {
      id: Date.now(),
      date: new Date(),
      ...order,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  delete(id: number) {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index !== -1) {
      const deletedOrder = this.orders[index];
      this.orders.splice(index, 1);
      return deletedOrder;
    }
    return null;
  }
}
