import { CategoryEntity } from './category.entity';

export class ProductEntity {
  id: number;
  name: string;
  description: string;
  price: number;
  category?: CategoryEntity;
}
