import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  @Get()
  getProducts(@Query('search') search?: string): ProductEntity[] {
    // TODO: Implémenter la logique
    return [];
  }

  @Get(':id')
  getProductById(@Param('id') id: string): ProductEntity {
    // TODO: Implémenter la logique
    return {
      id: +id,
      name: 'Example Product',
      description: 'Example Description',
      price: 99.99,
      category: undefined
    };
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): ProductEntity {
    // TODO: Implémenter la logique
    return {
      id: 1,
      ...createProductDto,
      category: undefined
    };
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: Partial<CreateProductDto>,
  ): ProductEntity {
    // TODO: Implémenter la logique
    return {
      id: +id,
      name: 'Updated Product',
      description: 'Updated Description',
      price: 199.99,
      category: undefined
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): void {
    // TODO: Implémenter la logique
  }
}
