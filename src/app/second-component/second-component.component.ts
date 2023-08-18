import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {

  signupurl: string = 'http://localhost:8080/signup';
  constructor(private http: HttpClient) {}
  formData = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmpassword: new FormControl()
  })
  
  signup(): void {
    const data = {email:this.formData.value.email , password: this.formData.value.password};
    if (this.formData.value.password === this.formData.value.confirmpassword) { 
      this.http.post(this.signupurl, data)
      .subscribe(
        data => console.log(data),
        error => console.log(error.error)
      );
    } else {
      console.log("Some error occured!");
    }
  }

}
