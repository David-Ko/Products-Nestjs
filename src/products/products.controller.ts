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

  @Get()
  allProducts(): Promise<Product[]> {
    return this.productsService.allProducts();
  }

  @Get(':id')
  getOneProduct(@Param() param): Promise<Product> {
    return this.productsService.getOneProduct(param.id);
  }

  @Post()
  addOneProduct(@Body() newProduct: productDto): Promise<Product> {
    console.log(newProduct.title, newProduct.description, newProduct.price);
    return this.productsService.addOneProduct(newProduct);
  }

  @Patch(':id')
  editOneProduct(@Param() param, @Body() product: productDto) {
    console.log(param, param.id);
    return this.productsService.editOneProduct(param.id, product);
  }

  @Delete(':id')
  deleteOneProduct(@Param() param) {
    return this.productsService.deleteOneProduct(param.id);
  }

  @Delete(':id')
  deteleProduct(@Param('id') prodId: string) {
    return `Deleted item with id ${prodId}`;
  }
}
