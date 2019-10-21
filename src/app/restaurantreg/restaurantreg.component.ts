import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-restaurantreg',
  templateUrl: './restaurantreg.component.html',
  styleUrls: ['./restaurantreg.component.css']
})
export class RestaurantregComponent implements OnInit {
  SERVER_URL = "http://localhost:3000/authentication/sign_up/restaurant";
  restaurantRegistrationForm;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) { 
    this.restaurantRegistrationForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      restaurant_name: ''
    })
  }

  ngOnInit() {
  }

  newRest(event){
    event.preventDefault()
    const password = event.target.password.value
    const confirmpass = event.target.confirmpass.value
    if(password == confirmpass){
      console.log("User info submitted")
      return true
    }
    else{
      alert("Passwords do not match")
      return false
    }
  }

  onSubmit(userData){
    console.log(userData);
    var r = this.loginService.sendRequest(userData, this.SERVER_URL);
    r.subscribe(data => {
      
      
    })
  }

}
