import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ShopModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
