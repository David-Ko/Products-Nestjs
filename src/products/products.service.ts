import { Injectable, NotFoundException } from '@nestjs/common';
// import { Product } from './product.model';
import { Product } from 'src/products/interfaces/product-interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async allProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async getOneProduct(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async addOneProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async editOneProduct(prodId: string, product: Product): Promise<Product> {
    console.log(prodId, product);
    return await this.productModel.findByIdAndUpdate(prodId, product, {
      new: true,
    });
  }

  async deleteOneProduct(prodId: string): Promise<Product> {
    return await this.productModel.findByIdAndRemove(prodId);
  }
}
