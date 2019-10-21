import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../login.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  SERVER_URL = "http://localhost:3000/authentication/sign_up/user";
  userRegistrationForm;
  
  

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder) { 
      this.userRegistrationForm = this.formBuilder.group({
        name: '',
        email: '',
        password: ''
      })
    }

  ngOnInit() {
    
  }

  onSubmit(userData){

    console.log(userData);
    var r = this.loginService.sendRequest(userData, this.SERVER_URL);
    r.subscribe(data => {
      // if(data['auth']){
      //   // this.cookie.set("jwttoken", data['token']);
      // }
      
    })

  }

}
