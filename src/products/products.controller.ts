import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product-interface';
import { productDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // addProduct(
  //   @Body('title') prodTitle: string,
  //   @Body('description') prodDesc: string,
  //   @Body('price') prodPrice: number,
  // ): any {
  //   const generatedId = this.productsService.addProduct(
  //     prodTitle,
  //     prodDesc,
  //     prodPrice,
  //   );
  //   return { id: generatedId };
  // }

  @Get()
  allProducts(): Product[] {
    return this.productsService.allProducts();
  }

  @Get(':id')
  getOneProduct(@Param() param): Product {
    return this.productsService.getOneProduct(param.id);
  }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') prodId: string,
  //   @Body() updateItemDto: productDto,
  //   // @Body('title') prodTitle: string,
  //   // @Body('description') prodDesc: string,
  //   // @Body('price') prodPrice: number,
  // ) {
  //   console.log(`${prodId} and ${updateItemDto}`);
  //   this.productsService.updateProduct(
  //     prodId,
  //     updateItemDto.title,
  //     updateItemDto.description,
  //     updateItemDto.price,
  //   );
  //   return null;
  // }

  @Delete(':id')
  deteleProduct(@Param('id') prodId: string) {
    // this.productsService.deleteProduct(prodId);
    // return { message: `Deleted` };
    return `Deleted item with id ${prodId}`;
  }
}
