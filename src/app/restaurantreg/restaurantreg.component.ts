import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurantreg',
  templateUrl: './restaurantreg.component.html',
  styleUrls: ['./restaurantreg.component.css']
})
export class RestaurantregComponent implements OnInit {
  SERVER_URL = "/authentication/sign_up/restaurant";
  restaurantRegistrationForm;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
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

  newRest(password, confirmpass){
    //event.preventDefault()
    
    if(password == confirmpass){
      return true
    }
    else{
      return false
    }
  }

  onSubmit(userData){
      var r = this.loginService.sendRequest(userData, this.SERVER_URL);
      r.subscribe(data => {
        this.router.navigate(['/resturantlogin']);
      })
  }

}
