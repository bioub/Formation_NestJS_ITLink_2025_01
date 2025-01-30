import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entity/category.entity';

@Injectable()
export class ProductService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return this.productRepository.find({ relations: ['category'] });
  }

  async getById(id: number): Promise<ProductEntity | null> {
    return this.productRepository.findOne({ where: { id: id }, relations: ['category'] });
  }

  async getByCategory(category: CategoryEntity): Promise<ProductEntity[]> {
    return this.productRepository.find({ where: { category }, relations: ['category'] });
  }

  async search(query: string): Promise<ProductEntity[]> {
    const searchFieldsStr = this.configService.get<string>('PRODUCT_SEARCH_FIELDS') ?? '';
    const searchFields = searchFieldsStr.split(',').map((field) => field.trim());

    let qb = this.productRepository.createQueryBuilder('product');

    if (searchFields.length > 0) {
      qb = qb.where(searchFields.map((field) => `LOWER(product.${field}) LIKE :query`).join(' OR '), {
        query: `%${query.toLowerCase()}%`,
      });
    }

    return qb.getMany();
  }

  async create(product: CreateProductDto): Promise<ProductEntity> {
    return this.productRepository.save(product);
  }

  async update(id: number, product: CreateProductDto): Promise<ProductEntity | null> {
    const updated = await this.productRepository.findOneBy({ id });

    if (!updated) {
      return null;
    }

    await this.productRepository.update(id, product);

    return updated;
  }

  async delete(id: number): Promise<ProductEntity | null> {
    const deleted = await this.productRepository.findOneBy({ id });

    if (!deleted) {
      return null;
    }

    await this.productRepository.remove(deleted);
    return deleted;
  }
}
