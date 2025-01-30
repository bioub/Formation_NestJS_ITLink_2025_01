import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(@Query('search') search?: string): ProductEntity[] {
    if (search) {
      return this.productService.search(search);
    }
    return this.productService.getAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): ProductEntity | null {
    return this.productService.getById(+id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): ProductEntity {
    return this.productService.create(createProductDto);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: Partial<CreateProductDto>,
  ): ProductEntity | null {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): ProductEntity | null {
    return this.productService.delete(+id);
  }
}
