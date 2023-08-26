import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  cartProductList: Product[] = [];
  wishlistProducts: Product[] = [];
  signupUrl: string = 'https://webappoo4.onrender.com/signup';
  signinUrl: string = 'https://webappoo4.onrender.com/signin';
  url: string = 'https://webappoo4.onrender.com/products';
  public products = new BehaviorSubject<any>([]);
  public productList = new BehaviorSubject<any>([]);
  public wishlist = new BehaviorSubject<any>([]);
  public isSignedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private route: Router) {}

  addProduct(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({id}) => id === product.id);
    if (!productExistsinCart) {
      this.cartProductList.push(product);
      this.productList.next(this.cartProductList);
      return;
    } else {
      console.log("Product Exists!");
    }
  }

  removeFromCart(product: Product): void {
    const productExistsinCart = this.cartProductList.find(({id}) => id === product.id);
    if (productExistsinCart) {
      this.cartProductList = this.cartProductList.filter(({id}) => id !== product.id);
      this.productList.next(this.cartProductList);
      console.log("Your Product is removed!");
    } else {
      console.log("No Product Exists!");
    }
  }

  addToWishlist(product: Product): void {
    const productExistsinWishlist = this.wishlistProducts.find(({id}) => id === product.id);
    if (!productExistsinWishlist) {
      this.wishlistProducts.push(product);
      this.wishlist.next(this.wishlistProducts);
      return;
    } else {
      console.log(`Products is already in the wishlist`);
    }
  }

  removeFromWishlist(product: Product): void {
    const productExistsinWishlist = this.wishlistProducts.find(({id}) => id === product.id);
    if (productExistsinWishlist) {
      this.wishlistProducts = this.wishlistProducts.filter(({id}) => id !== product.id);
      this.wishlist.next(this.wishlistProducts);
      console.log("Your Product is removed!");
    } else {
      console.log(`No Product Exists!`);
    }
  }

  signup(data: any): Observable<any> {
    return this.http.post(this.signupUrl, data);
  }

  signin(data: any): Observable<any> {
    return this.http.post(this.signinUrl, data);
  }

  signout(): void {
    localStorage.removeItem('token');
    this.isSignedIn.next(false);
    this.route.navigate(['signin']);
  }

  clearThecart(): void {
    this.cartProductList = [];
    this.productList.next(this.cartProductList);
  }

  getCartProducts(): any {
    return this.productList.asObservable();
  }

  getProductsFromInternet(): any {
    const data = this.http.get(this.url);
    data.forEach((mydata: any) => this.products.next(mydata));
    return this.products.asObservable();
  }

}
