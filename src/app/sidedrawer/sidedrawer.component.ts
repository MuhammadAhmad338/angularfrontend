import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  styleUrls: ['./sidedrawer.component.css']
})
export class SidedrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();
constructor(private cartService: CartServiceService) {}
  closeDrawer() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

  signout(): void {
    this.cartService.signout();
  }

}
