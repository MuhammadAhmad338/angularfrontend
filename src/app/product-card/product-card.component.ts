import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product: any;
 
  constructor(private router: Router) {

  }

  navigateToSingleProduct(): void {
    this.router.navigate([`product/${this.product.name}`]);
  }
}
