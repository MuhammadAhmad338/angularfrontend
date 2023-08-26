import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent implements OnInit {
  alreadyUse: any;
  constructor(private cartService: CartServiceService, private route: Router) {}
  formData = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmpassword: new FormControl(),
  });

  ngOnInit(): void {}

  async signup(): Promise<void> {
    const data = {
      email: this.formData.value.email,
      password: this.formData.value.password,
    };
    if (data.email !== null && data.password !== null) {
      if (
        this.formData.value.password === this.formData.value.confirmpassword
      ) {
        this.cartService.signup(data).subscribe((response) => {
          this.alreadyUse = response.token;
          localStorage.setItem('token', this.alreadyUse);
          this.clearForm();
          this.cartService.isSignedIn.next(true);
          // Redirect after 2 seconds
          setTimeout(() => {
            this.route.navigate(['dashboard']); // Change this to your desired route
          }, 2000);
        });
        
      } else {
        console.log('Some error occured!');
      }
    }
  }

  clearForm(): void {
    this.formData.reset();
  }
}
