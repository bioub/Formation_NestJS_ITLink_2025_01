import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { OrderEntity } from 'src/shop/entity/order.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): UserEntity[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserEntity | null {
    return this.userService.getById(+id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): UserEntity {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<CreateUserDto>,
  ): UserEntity | null {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): UserEntity | null {
    return this.userService.delete(+id);
  }

  @Get(':id/orders')
  getOrdersByUser(@Param('id') id: string): OrderEntity[] {
    // TODO: Implémenter la logique
    return [];
  }
}
