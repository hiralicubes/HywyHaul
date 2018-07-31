import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobals } from '../../app.globals';
import { Router } from "@angular/router";

@Injectable()
export class LoadService {

  admin_api_url = this._global.base_url_api;
  x_api_key = this._global.x_api_key;
  constructor(
    private http: HttpClient,
    private _global: AppGlobals,
    private _router: Router
  ) { }

	getLoad(token) {
		return this.http.get(this.admin_api_url+'/loads', {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key
      })
		});
	}

  getAddresses(token) {
		return this.http.get(this.admin_api_url+'/addresses', {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key
      })
		});
	}

	createLoad(token, userData) {
		return this.http.post(this.admin_api_url+'/loads', userData, {
      headers: new HttpHeaders({
        'x-hh-token': token,
        'x-api-key': this.x_api_key
      })
		});
	}

}
