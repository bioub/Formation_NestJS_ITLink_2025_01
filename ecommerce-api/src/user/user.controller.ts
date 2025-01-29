import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { OrderEntity } from '../shop/entity/order.entity';

@Controller('users')
export class UserController {
  @Get()
  getUsers(): UserEntity[] {
    // TODO: Implémenter la logique
    return [];
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserEntity {
    // TODO: Implémenter la logique
    return {
      id: +id,
      name: 'Example User',
      email: 'user@example.com',
      password: '********'
    };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): UserEntity {
    // TODO: Implémenter la logique
    return {
      id: 1,
      ...createUserDto
    };
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ): UserEntity {
    // TODO: Implémenter la logique
    return {
      id: +id,
      name: 'Updated User',
      email: 'updated@example.com',
      password: '********'
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    // TODO: Implémenter la logique
  }

  @Get(':id/orders')
  getOrdersByUser(@Param('id') id: string): OrderEntity[] {
    // TODO: Implémenter la logique
    return [];
  }
}
