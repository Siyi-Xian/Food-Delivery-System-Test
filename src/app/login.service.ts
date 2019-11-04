import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'dataType': 'json',
      'withcredentials': 'false'
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  sendRequest(data, url){
    // console.log(data)
    // return this.httpClient.post(url, data, this.httpOptions).subscribe(
    //   (res)=>{
    //     console.log(res)
    //     return res
    //   },
    //   (err)=> {
    //     console.log(err)
    //     return err
    //   }
    // );
    return this.httpClient.post(url, data)
    
  }

}
