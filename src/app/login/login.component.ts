import {Component, OnInit} from '@angular/core';
// import { AuthService } from '../auth.service';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { SocialloginService } from '../sociallogin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;
  userLoginForm;
  response: any;

  socialusers=new Socialusers();

  timesSubmitted = 0;

  constructor(
    public OAuth: AuthService,
    private SocialloginService: SocialloginService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService) {
    this.userLoginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    this.addRecaptchaScript();
  }

  onSubmit(userData) {
    var r = this.loginService.sendRequest(userData, '/authentication/login/user');
    r.subscribe(data => {
      if (data['auth']) {
        this.cookie.set('jwttoken', data['token']);
        this.router.navigate(['/customerdashboard']);
      }

    });
    // this.cookie.set("userid", "123")
    // console.log(this.response)
    
    const payload = {
      jwttoken: this.cookie.get('jwttoken')
    };
    console.log(payload);
    console.log(this.cookie.get('jwttoken'));
    r = this.loginService.sendRequest(payload, '/authentication/verifyotp');
    r.subscribe(data => {
      console.log(data);
    });
  }

  public socialSignIn(socialProvider: string){
    let socialPlatormProvider;
    if(socialProvider == 'google'){
      socialPlatormProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    else if(socialProvider == 'facebook'){
      socialPlatormProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.OAuth.signIn(socialPlatormProvider).then(socialusers =>{
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(socialusers);
    });
  }

  Savesresponse(socialusers: Socialusers){
    this.SocialloginService.Savesresponse(Socialusers).subscribe((res: any) =>{
      this.socialusers=res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
      this.router.navigate(['/customerdashboard']);
    })
  }

  addRecaptchaScript(){
    window['grecaptchaCallback'] = () => {
      this.renderReCaptcha();
    }

    (function(d, s, id, obj){
      var js,fjs = d.getElementsByTagName(s)[0];
      if(d.getElementById(id)) { obj.renderReCaptcha(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }

  renderReCaptcha(){
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LeH9r8UAAAAALWth6G-94o1Zs6yniRys5g4D7d-',
      'callback' : (response) => {
        console.log(response);
      }
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
export class Socialusers{
  provider: string;
  id: string;
  email: string;
  name: string;
  //image: string;
  token?: string;
  idToken?: string;
}

