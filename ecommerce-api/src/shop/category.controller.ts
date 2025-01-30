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
import { CategoryService } from './category.service';
import { ProductEntity } from './entity/product.entity';
import { Request } from 'express';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories(@Req() req: Request): CategoryEntity[] {
    return this.categoryService.getAll();
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto): CategoryEntity {
    return this.categoryService.create(createCategoryDto);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string): CategoryEntity | null {
    return this.categoryService.delete(+id);
  }

  @Get(':id/products')
  getProductsByCategory(@Param('id') id: string): ProductEntity[] {
    // TODO: Implémenter la logique
    return [];
  }
}
