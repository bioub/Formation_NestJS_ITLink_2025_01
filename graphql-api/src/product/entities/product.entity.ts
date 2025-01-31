import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  name: string;

  @Column({ type: 'text' })
  @Field(() => Int)
  description: String;

  @Column({ type: 'float' })
  @Field(() => String)
  price: number;

  @ManyToOne(() => Category)
  @Field(() => Category)
  category?: Category;
}
