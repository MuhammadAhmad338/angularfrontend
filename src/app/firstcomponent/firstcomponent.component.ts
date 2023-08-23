import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})

export class FirstcomponentComponent {

  userNotExists: any = '';
  pleaseEnterSomething: string = '';
  public username: string = "";
  public password: string = "";
  signinurl: string = 'https://webappoo4.onrender.com/signin';
  constructor(private http: HttpClient) {}
  formData = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  onSubmit() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

   signin(): void {
    const data = {email: this.formData.value.email, password: this.formData.value.password};
    if (data.email !== null && data.password !== null) {
    console.log(data);
      if (data) {
    this.http.post(this.signinurl, data).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }
    this.clearForm();
  } else {
    this.pleaseEnterSomething = "Please fill all the fields!";
  }
 }

 clearForm(): void {
  this.formData.reset();
 }

}
