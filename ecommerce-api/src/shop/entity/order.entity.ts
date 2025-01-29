import { ProductEntity } from './product.entity';
import { UserEntity } from '../../user/entity/user.entity';

export class OrderEntity {
  id: number;
  date: Date;
  products?: ProductEntity[];
  user?: UserEntity;
}
