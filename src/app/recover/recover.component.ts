import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  userRecoverForm;
  userVerifyForm;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService) { 
      this.userRecoverForm = this.formBuilder.group({
        name: '',
        email: ''
      });
      this.userVerifyForm = this.formBuilder.group({
        otp: ''
      })
    }


  private showFile: boolean = false;
  private showPasswordReset: boolean = false;
  onClickOpenVerification(){
    this.showFile = true;
  }

  onShowPasswordRest(){
    this.showPasswordReset = true;
  }

  ngOnInit() {
  }

  veryOTPAsyn(otpControl: FormControl): Promise<any> {
    console.log(otpControl)
    console.log(otpControl.hasError('invalidOtp'))
    return new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          resolve({invalidOtp:true});
        }, 500);
      });
  }

  onSubmit(userData){
    
    var jwttoken = this.cookie.get('jwttoken');
    userData['jwttoken'] = jwttoken;


    var r = this.loginService.sendRequest(userData, 'http://localhost:3000/recover');
    r.subscribe(data =>{
      console.log(data);
      if(data['auth']){
        this.onShowPasswordRest();
      }
    })
  }



  onReset(userData){
    var jwttoken = this.cookie.get('jwttoken');
    userData['jwttoken'] = jwttoken;
    var r = this.loginService.sendRequest(userData, 'http://localhost:3000/resetpassword');
    r.subscribe(data =>{
      //set the users password to this
      console.log(data);
      this.router.navigate(['/login']);
    })
  }
}
