import { Injectable, NotFoundException } from '@nestjs/common';
// import { Product } from './product.model';
import { Product } from 'src/products/interfaces/product-interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: '1',
      title: 'Tim Hortons Coffee',
      description: 'Medium roast',
      price: 50,
    },
    {
      id: '2',
      title: 'Starbucks Coffee',
      description: 'French roast',
      price: 50,
    },
    {
      id: '3',
      title: "Seattle's Best Coffee",
      description: 'Dark roast',
      price: 50,
    },
    {
      id: '4',
      title: 'Pacific Coffee',
      description: 'Oolong roast',
      price: 50,
    },
  ];

  allProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: string): Product {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new NotFoundException('cannot find');
    }
    return product;
  }
  // addProduct(title: string, description: string, price: number): string {
  //   const prodId = (Math.random() * 100).toString();
  //   const newProduct = new Product(prodId, title, description, price);
  //   this.products.push(newProduct);
  //   return prodId;
  // }

  // allProducts() {
  //   return [...this.products];
  // }

  // getOneProduct(prodId: any) {
  //   const product = this.findProduct(prodId)[0];
  //   return { ...product };
  // }

  // updateProduct(
  //   productId: string,
  //   title: string,
  //   description: string,
  //   price: number,
  // ) {
  //   // const product = this.findProduct(productId)[0];
  //   // const productIndex = this.findProduct(productId)[1];
  //   const [product, index] = this.findProduct(productId);
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (description) {
  //     updatedProduct.description = description;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   this.products[index] = updatedProduct;
  // }

  // deleteProduct(prodId: string) {
  //   const [product, index] = this.findProduct(prodId);
  //   this.products.splice(index, 1);
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex(product => product.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Cannot find your product');
  //   }
  //   return [product, productIndex];
  // }
}
