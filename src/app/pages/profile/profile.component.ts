import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';
import { AuthenticationService } from "../../_services/authentication.service";
import { UserService } from "../../_services/user/user.service";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms' ;   /** Step 1 */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //public user: any = JSON.parse(localStorage.getItem("currUser"));
  profileForm: FormGroup;
  public token = localStorage.getItem('userToken');
  public user : any = [];
  public states : any;
  public cities : any;
  public image:File;
  public title : any;
  constructor(
    formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService) {
      this.profileForm = formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        code: [],
        phoneNumber: ['', Validators.required],
        code2: [],
        phoneNumber2: [],
        name: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        addressLine1: ['', Validators.required],
        addressLine2: [],
        addressLine3: [],
        addressLine4: [],
        zip: ['', Validators.required]
      })
  }

  ngOnInit() {
    this.title = 'Profile';
    this.authenticationService.checkAuthentication();
    if (this.token) {
      this.userService.getUser(this.token)
      .subscribe(
        data => {
          if (data['code'] == 'OK') {
            this.user = data['data'];
          } else {
            this.toastr.error("Error in process!", 'Oops!');
          }
        },
        error => {
          this.toastr.error(error.error.errors[0].message, 'Oops!');
      });

      this.userService.getStates()
        .subscribe(
          data => {
            if (data['code'] == 'OK') {
              this.states = data['data'];
            } else {
              this.toastr.error("Error in process!", 'Oops!');
            }
          },
          error => {
            this.toastr.error(error.error.errors[0].message, 'Oops!');
      });
    }
  }

  getStateCities(value){
    if(value){
      this.userService.getStateCities(value)
      .subscribe(
        data => {
          if (data['code'] == 'OK') {
            this.cities = data['data'];
            //this.loading = false;
          } else {
            this.toastr.error("Error in process!", 'Oops!');
          }
        },
        error => {
          this.toastr.error(error.error.errors[0].message, 'Oops!');
        });
    }else{
      this.cities = [];
    }
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length > 0) {
        this.image = event.target.files[0];
    }
  }

  saveProfile(){
    this.profileForm.controls['firstName'].markAsTouched();
    this.profileForm.controls['lastName'].markAsTouched();
    this.profileForm.controls['phoneNumber'].markAsTouched();
    //this.profileForm.controls['code'].markAsTouched();
    this.profileForm.controls['phoneNumber2'].markAsTouched();
    //this.profileForm.controls['code2'].markAsTouched();
    this.profileForm.controls['name'].markAsTouched();
    this.profileForm.controls['city'].markAsTouched();
    this.profileForm.controls['state'].markAsTouched();
    this.profileForm.controls['addressLine1'].markAsTouched();
    this.profileForm.controls['addressLine2'].markAsTouched();
    this.profileForm.controls['addressLine3'].markAsTouched();
    this.profileForm.controls['addressLine4'].markAsTouched();
    this.profileForm.controls['zip'].markAsTouched();

    if (this.profileForm.valid) {
      //var formData = this.profileForm.value;
      var formData = {
        'data': {
          "firstName": this.profileForm.value.firstName,
          "lastName": this.profileForm.value.lastName,
          "phoneNumber": this.profileForm.value.phoneNumber,
        //  "code": this.profileForm.value.code,
          "phoneNumber2": this.profileForm.value.phoneNumber2,
        //  "code2": this.profileForm.value.code2,
          "shipper": {
            "name": this.profileForm.value.name,
            "address": {
              "addressLine1": this.profileForm.value.addressLine1,
              "addressLine2": this.profileForm.value.addressLine2,
              "addressLine3": this.profileForm.value.addressLine3,
              "addressLine4": this.profileForm.value.addressLine4,
              "city": this.profileForm.value.city,
              "state": this.profileForm.value.state,
              "zip": this.profileForm.value.zip
            }
          }
        }
      }

      this.userService.updateUser(this.token,formData)
        .subscribe(
          data => {
            if (data['code'] == 'OK') {
              this.toastr.success("Updated profile successfully.", 'Success');
            } else {
              this.toastr.error("Error in process!", 'Oops!');
            }
          },
          error => {
            this.toastr.error(error.error.errors[0].message, 'Oops!');
      });

      if(this.image) {
        var photoData = {
          'PROFILE-PHOTO':this.image,
          'WORKFLOW-TYPE':'PROFILE-REGISTRATION'
        };
        this.userService.uploadPhoto(this.token,photoData)
          .subscribe(
            data => {
              if (data['code'] == 'OK') {
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

}
