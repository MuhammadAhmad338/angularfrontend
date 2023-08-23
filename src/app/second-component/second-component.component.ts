import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})

export class SecondComponentComponent implements OnInit {

  alreadyUse: any = '';
  signupurl: string = 'https://webappoo4.onrender.com/signup';
  constructor(private http: HttpClient) {}
  formData = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmpassword: new FormControl()
  });

  ngOnInit(): void {}

  signup(): void {
    const data = {
      email: this.formData.value.email,
      password: this.formData.value.password
    };
    if (data.email !== null && data.password !== null) {
      if (this.formData.value.password === this.formData.value.confirmpassword) {
        this.http.post(this.signupurl, data).subscribe(
          (data) => this.alreadyUse = data,
          (error) => (error = error.error)
        );
        this.clearForm();
      } else {
        console.log('Some error occured!');
      }
    }
  }

  clearForm(): void {
    this.formData.reset();
  }

}
