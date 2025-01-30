import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from '../../user/entity/user.entity';
import { ProductEntity } from './product.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date;

  products?: ProductEntity[];
  user?: UserEntity;
}
