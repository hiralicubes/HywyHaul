import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from "../../_services/authentication.service";
import { ToastrService } from 'ngx-toastr';
declare var $:any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {
      this.registerForm = formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.email],
        password: ['', Validators.required],
        confirm_password: ['', Validators.required]
      }, {
        validator: [this.MatchPassword] // your validation method
      })
 }

 MatchPassword(AC: AbstractControl) {
   let password = AC.get('password').value; // to get value in input tag
   let confirmPassword = AC.get('confirm_password').value; // to get value in input tag
     if(password != confirmPassword) {
         AC.get('confirm_password').setErrors( {MatchPassword: true} )
     } else {
         return null
     }
  }

  ngOnInit() {
    $('.slick-single').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
     dots: true,
     arrows: false,
     lazyLoad: 'ondemand',
     autoplay: true,
     adaptiveHeight: false
    });
  }

  saveUser(){
    this.registerForm.controls['firstName'].markAsTouched();
    this.registerForm.controls['lastName'].markAsTouched();
    this.registerForm.controls['phoneNumber'].markAsTouched();
    this.registerForm.controls['name'].markAsTouched();
    this.registerForm.controls['email'].markAsTouched();
    this.registerForm.controls['password'].markAsTouched();
    this.registerForm.controls['confirm_password'].markAsTouched();

    if (this.registerForm.valid) {
      var formData = {
        'data': {
          "email": this.registerForm.value.email,
          "firstName": this.registerForm.value.firstName,
          "lastName": this.registerForm.value.lastName,
          "password": this.registerForm.value.password,
          "phoneNumber": this.registerForm.value.phoneNumber,
          "username": this.registerForm.value.firstName+this.registerForm.value.lastName,
          "shipper": {
            "name": this.registerForm.value.name,
            "address": {
              "addressLine1": "900 Edwin Road",
              "zip": "98605"
            }
          }
        }
      }
      this.authenticationService.signup(formData)
      .subscribe(
        data => {
          if (data['code'] == 'OK') {
            this.toastr.success("Registered Successfully", 'Success');
            this.router.navigate(['login'])
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
