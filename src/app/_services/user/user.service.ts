import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobals } from '../../app.globals';
import { Router } from "@angular/router";

@Injectable()
export class UserService {

  admin_api_url = this._global.base_url_api;
  x_api_key = this._global.x_api_key;
  constructor(
    private http: HttpClient,
    private _global: AppGlobals,
    private _router: Router
  ) { }

	getUser(token) {
		return this.http.get(this.admin_api_url+'/users/profile', {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key
      })
		});
	}

	updateUser(token, userData) {
		return this.http.post(this.admin_api_url+'/users/profile', userData, {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key
      })
		});
	}

  uploadPhoto(token, formData) {
		return this.http.post(this.admin_api_url+'/docs', formData, {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key
      })
		});
	}

  getStates() {
		return this.http.get(this.admin_api_url+'/cities/states', {
      headers: new HttpHeaders({
        'x-api-key': this.x_api_key
      })
		});
	}

  getStateCities(state) {
		return this.http.get(this.admin_api_url+'/cities/state/'+state, {
      headers: new HttpHeaders({
        'x-api-key': this.x_api_key
      })
		});
	}

}
