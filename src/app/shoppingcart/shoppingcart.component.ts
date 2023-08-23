import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../product';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})

export class ShoppingcartComponent implements OnInit {
  
  cartProducts: Product[] = [];
  @Input() isShoppingCartOpen: boolean = false;
  @Output() isChangeOpen: EventEmitter<boolean> = new EventEmitter();
 
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {}

  closeShoppingCart(): void {
    this.isShoppingCartOpen = !this.isShoppingCartOpen;
    this.isChangeOpen.emit(this.isShoppingCartOpen);
  }

  getItems(): void {
    this.cartProducts = this.cartService.getCartProducts();
    console.log(this.cartProducts);
  }

}
