import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from "../../_services/authentication.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgotForm : FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {
      this.forgotForm = formBuilder.group({
        email: ['', Validators.email]
      })
  }

  ngOnInit() {
  }

  forgot(){
    this.forgotForm.controls['email'].markAsTouched();

    if (this.forgotForm.valid) {
      var formData = {
        'email': this.forgotForm.value.email
      }
      this.authenticationService.forgot(formData)
      .subscribe(
        data => {
          console.log(data);
          if (data['code'] == 'OK') {
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
