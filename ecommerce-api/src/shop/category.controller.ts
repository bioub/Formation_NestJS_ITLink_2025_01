import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Req,
} from '@nestjs/common';
import { CategoryEntity } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ProductEntity } from './entity/product.entity';
import { Request } from 'express';

@Controller('categories')
export class CategoryController {
  @Get()
  getCategories(@Req() req: Request): CategoryEntity[] {
    // TODO: Implémenter la logique
    return [];
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto): CategoryEntity {
    // TODO: Implémenter la logique
    return {
      id: 1,
      ...createCategoryDto,
    };
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string): void {
    // TODO: Implémenter la logique
  }

  @Get(':id/products')
  getProductsByCategory(@Param('id') id: string): ProductEntity[] {
    // TODO: Implémenter la logique
    return [];
  }
}
