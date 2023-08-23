import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartProductList: Product[] = [];
  constructor() { }

  addProduct(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({name}) => name === product.name);
    if (!productExistsinCart) {
      this.cartProductList.push(product);
      console.log(this.cartProductList);
      return;
    } else {
      console.log("Product Exists!");
    }
  }


  removeFromCart(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({name}) => name === product.name);
    console.log(productExistsinCart);
    if (productExistsinCart) {
      this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name);
      console.log("Product is removed!");
    } else {
      console.log("No Product Exists!");
    }
  }

  getCartProducts(): Product[] {
    return this.cartProductList;
  }
}
