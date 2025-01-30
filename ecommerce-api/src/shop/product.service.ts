import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@Inject('CONFIG') private config: { searchFields: string[] }) {}

  private products: ProductEntity[] = [];

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((product) => product.id === id) ?? null;
  }

  search(query: string) {
    console.log(this.config.searchFields);

    const lowercaseQuery = query.toLowerCase();
    return this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery),
    );
  }

  create(product: CreateProductDto) {
    const newProduct = {
      id: Date.now(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product: CreateProductDto) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...product };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      const deletedProduct = this.products[index];
      this.products.splice(index, 1);
      return deletedProduct;
    }
    return null;
  }
}
