import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entity/category.entity';

@Injectable()
export class CategoryService {
  private categories: CategoryEntity[] = [];

  getAll() {
    return this.categories;
  }

  create(category: any) {
    const newCategory = {
      id: Date.now(),
      ...category,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  delete(id: number) {
    const index = this.categories.findIndex((c) => c.id === id);
    if (index !== -1) {
      const deletedCategory = this.categories[index];
      this.categories.splice(index, 1);
      return deletedCategory;
    }
    return null;
  }
}
