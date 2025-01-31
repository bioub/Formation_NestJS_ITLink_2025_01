import { Injectable } from '@nestjs/common';

import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,) {}
  
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({ where: { id: id }, relations: ['category'] });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
