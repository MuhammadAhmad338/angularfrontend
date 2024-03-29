import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product: any;
  routes: ActivatedRoute = inject(ActivatedRoute);
  id: number;
  
  constructor(private router: Router) {
    console.log(this.routes.snapshot.params["id"]);
     this.id =  this.routes.snapshot.params["id"];

  }

  navigateToSingleProduct(): void {
    this.router.navigate([`product/${this.id}`]);
  }
}
