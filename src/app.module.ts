import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { ProductModel } from './product/product.model';
import { ProductModule } from './product/product.module';

@Module({
    imports: [
        AuthModule,
        TopPageModule,
        ReviewModule,
        ProductModel,
        ProductModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
