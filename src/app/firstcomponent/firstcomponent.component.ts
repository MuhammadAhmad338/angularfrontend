import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})

export class FirstcomponentComponent {
 
  signinurl: string = 'http://localhost:8080/signin';
  constructor(private http: HttpClient) {}
  formData = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  }); 

   signin(): void {
    const data = {email: this.formData.value.email, password: this.formData.value.password};
    if (data) {
    this.http.post(this.signinurl, data).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    } else {
      console.log("Enter the data");  
    }
 }
 
}
