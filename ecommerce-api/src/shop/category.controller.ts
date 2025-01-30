import { Controller, Get, Post, Body, Delete, Param, NotFoundException, HttpCode } from '@nestjs/common';
import { CategoryEntity } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { ProductEntity } from './entity/product.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(): Promise<CategoryEntity[]> {
    return this.categoryService.getAll();
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    return this.categoryService.create(createCategoryDto);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<CategoryEntity> {
    const deleted = await this.categoryService.delete(+id);

    if (!deleted) {
      throw new NotFoundException('Category not found');
    }

    return deleted;
  }

  @Get(':id/products')
  getProductsByCategory(@Param('id') id: string): ProductEntity[] {
    // TODO: Implémenter la logique
    return [];
  }
}
