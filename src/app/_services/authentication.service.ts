import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobals } from '../app.globals';
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {

  result: any;
  admin_api_url = this._global.base_url_api;
  x_api_key = this._global.x_api_key;
  constructor(
    private http: HttpClient,
    private _global: AppGlobals,
    private _router: Router
  ) { }

  signup(data) {
      return this.http.post(this.admin_api_url+'/shippers/signUp', data, {
          headers: new HttpHeaders({
            'x-api-key': this.x_api_key
          })
  		});
  }

  login(data) {
      return this.http.post(this.admin_api_url+'/shippers/signIn', data, {
          headers: new HttpHeaders({
            'x-api-key': this.x_api_key
          })
  		});
  }

  forgot(data) {
      return this.http.post(this.admin_api_url+'/users/resetpassword', data, {
          headers: new HttpHeaders({
            'x-api-key': this.x_api_key
          })
  		});
  }

  logoutService(token) {
    console.log(token);
    this.http.post(this.admin_api_url+'/auth/logout',{}, {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key,
      })
    }).
    subscribe(
      data => {
          localStorage.removeItem('currUser');
          localStorage.removeItem('userToken');
          this._router.navigateByUrl('');
      },
      error => {
    });
  }

  checkAuthentication(){
    if (localStorage.getItem("currUser") === null || localStorage.getItem("userToken") === null){
        this._router.navigateByUrl('');
    }
  }

}
