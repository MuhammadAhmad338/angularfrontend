import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css'],
})
export class FirstcomponentComponent {
  userNotExists: any;
  pleaseEnterSomething: string = '';
  public username: string = '';
  public password: string = '';
  signinurl: string = 'https://webappoo4.onrender.com/signin';
  constructor(
    private route: Router,
    private cartService: CartServiceService
  ) {}
  formData = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

  async signin(): Promise<void> {
    const data = {
      email: this.formData.value.email,
      password: this.formData.value.password,
    };
    if (data.email !== null && data.password !== null) {
      if (data) {
        this.cartService
          .signin(data)
          .subscribe((response) => {
            this.userNotExists = response.token;
            localStorage.setItem('token', this.userNotExists);
            this.clearForm();
             this.cartService.isSignedIn.next(true);
            setTimeout(() => {
              this.route.navigate(['dashboard']);
            }, 1000);
            this.cartService.isSignedIn.next(true);
          });
         
      }
    } else {
      this.pleaseEnterSomething = 'Please fill all the fields!';
    }
  }

  clearForm(): void {
    this.formData.reset();
  }
}
