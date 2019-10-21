import {Component, OnInit} from '@angular/core';
// import { AuthService } from '../auth.service';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm;
  response: any;

  timesSubmitted = 0;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookie: CookieService) {
    this.userLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {

  }

  onSubmit(userData) {
    var r = this.loginService.sendRequest(userData, 'http://localhost:3000/authentication/login/user');
    r.subscribe(data => {
      if (data['auth']) {
        this.cookie.set('jwttoken', data['token']);
      }

    });
    // this.cookie.set("userid", "123")
    // console.log(this.response)
    const payload = {
      jwttoken: this.cookie.get('jwttoken')
    };
    console.log(payload);
    console.log(this.cookie.get('jwttoken'));
    r = this.loginService.sendRequest(payload, 'http://localhost:3000/verifyotp');
    r.subscribe(data => {
      console.log(data);
    });
  }

  // logUserIn(event){
  //   event.preventDefault()
  //   console.log(event)
  //   this.timesSubmitted += 1
  //   if (this.timesSubmitted > 1){
  //     console.log("captcha has been prompted")
  //   }

  // const target = event.target
  // console.log(target.srcElement['0'])
  // const email = target.querySelector('email').value
  // const password = target.querySelector('password').value
  // }
  /*
  // subscribe is throwing error because the http request to the backend hasn't been established yet
  this.Auth.validateUserDetails(email, password).subscribe(data => {
    if(data.success){
      // direct user to customer view
    }
    else{
      window.alert("Invalid credintials")
    }
  })
  console.log(email, password)
}
*/

}
