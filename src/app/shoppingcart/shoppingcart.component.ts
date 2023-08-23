import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../product';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})

export class ShoppingcartComponent implements OnInit {
  
   public cartProducts: any = [];
  @Input() isShoppingCartOpen: boolean = false;
  @Output() isChangeOpen: EventEmitter<boolean> = new EventEmitter();
 
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((res: any) => this.cartProducts = res);
  }

  closeShoppingCart(): void {
    this.isShoppingCartOpen = !this.isShoppingCartOpen;
    this.isChangeOpen.emit(this.isShoppingCartOpen);
  }

  clearthecart(): void {
    this.cartService.clearThecart();
  }

  removeProductFromCart(product: Product) { 
     this.cartService.removeFromCart(product);
  }

}
