import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from "../../_services/authentication.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loign',
  templateUrl: './loign.component.html',
  styleUrls: ['./loign.component.css']
})
export class LoignComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {
      this.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  ngOnInit() {
  }

  login(){
    this.loginForm.controls['username'].markAsTouched();
    this.loginForm.controls['password'].markAsTouched();

    if (this.loginForm.valid) {
      var formData = {
        'data': {
          "username": this.loginForm.value.username,
          "password": this.loginForm.value.password
         }
      }
      this.authenticationService.login(formData)
      .subscribe(
        data => {
          if (data['code'] == 'OK') {
            let response = data['data'];
            localStorage.setItem('currUser', JSON.stringify(response));
            localStorage.setItem('userToken', response.authToken);
            this.router.navigateByUrl('/pages/profile');
          } else {
            this.toastr.error("Error in process!", 'Oops!');
          }
        },
        error => {
          this.toastr.error(error.error.errors[0].message, 'Oops!');
        });
    }
  }

}
