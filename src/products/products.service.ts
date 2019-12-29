import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  addProduct(title: string, description: string, price: number): string {
    const prodId = (Math.random() * 100).toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  allProducts() {
    return [...this.products];
  }

  getOneProduct(prodId: any) {
    const product = this.products.find(product => product.id === prodId);
    if (!product) {
      throw new NotFoundException('Cannot find your product');
    }
    return { ...product };
  }
}
