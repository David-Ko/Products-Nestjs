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
    const product = this.findProduct(prodId)[0];
    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    // const product = this.findProduct(productId)[0];
    // const productIndex = this.findProduct(productId)[1];
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const [product, index] = this.findProduct(prodId);
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(product => product.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Cannot find your product');
    }
    return [product, productIndex];
  }
}
