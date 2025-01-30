import { fakerFR as faker } from '@faker-js/faker';
import { ConsoleLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DataSource, EntityManager } from 'typeorm';

import { AppModule } from '../app.module';
import { CategoryEntity } from '../shop/entity/category.entity';
import { OrderEntity } from '../shop/entity/order.entity';
import { ProductEntity } from '../shop/entity/product.entity';
import { UserEntity } from '../user/entity/user.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: new ConsoleLogger({
      colors: false,
    }),
  });

  const entityManager = app.get(EntityManager);

  // Create 3 categories
  await entityManager.delete(CategoryEntity, {});
  for (let i = 0; i < 3; i++) {
    await entityManager.insert(CategoryEntity, {
      name: faker.commerce.department(),
    });
  }

  // Create 10 products
  await entityManager.delete(ProductEntity, {});
  for (let i = 0; i < 10; i++) {
    await entityManager.insert(ProductEntity, {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number.parseFloat(faker.commerce.price()),
    });
  }

  // Create 3 users
  await entityManager.delete(UserEntity, {});
  for (let i = 0; i < 10; i++) {
    await entityManager.insert(UserEntity, {
      name: faker.commerce.productName(),
      email: faker.internet.email(),
      password: faker.internet.password(), // TODO: hash password
    });
  }

  // Create 5 orders
  await entityManager.delete(OrderEntity, {});
  for (let i = 0; i < 10; i++) {
    await entityManager.insert(OrderEntity, {
      date: faker.date.recent(),
    });
  }

  await app.close();
}

bootstrap();
