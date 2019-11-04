import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../login.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  SERVER_URL = "/authentication/sign_up/user";
  userRegistrationForm;
  
  

  constructor(
    private loginService: LoginService,
    private router: Router,
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
      this.router.navigate(['/login']);
    })

  }

}
