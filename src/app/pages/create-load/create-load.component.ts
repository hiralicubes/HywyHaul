import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { AuthenticationService } from "../../_services/authentication.service";
import { LoadService } from "../../_services/load/load.service";
import { UserService } from "../../_services/user/user.service";
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-load',
  templateUrl: './create-load.component.html',
  styleUrls: ['./create-load.component.css']
})
export class CreateLoadComponent implements OnInit {

  public title : any;
  loadForm: FormGroup;
  public token = localStorage.getItem('userToken');
  public user : any;
  public addresses : any;
  public equipments : any;
  public sizes : any;
  public currUser: any = JSON.parse(localStorage.getItem("currUser"));

  constructor(
    formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private loadService: LoadService) {
      this.loadForm = formBuilder.group({
        earliestPickupDateTime: ['', Validators.required],
        latestPickupDateTime: ['', Validators.required],
        earliestDropoffDateTime: ['', Validators.required],
        latestDropoffDateTime: ['', Validators.required],
        origin: ['', Validators.required],
        destination: ['', Validators.required],
        equipment: ['', Validators.required],
        load_size: ['', Validators.required],
        weight: ['', Validators.required],
        ratePerMile: ['', Validators.required],
        instructions: ['', Validators.required]
      }, {
        validator: [this.MatchNumber,this.MatchNumber2] // your validation method
      })
  }

  MatchNumber(AC: AbstractControl) {
    let weight = AC.get('weight').value; // to get value in input tag
    var valid = (weight.match(/^-?\d*(\.\d+)?$/)); // to get value in input tag
      if(!valid) {
          AC.get('weight').setErrors( {MatchNumber: true} )
      } else {
          return null
      }
   }

   MatchNumber2(AC: AbstractControl) {
     let rate = AC.get('ratePerMile').value;
     var valid = (rate.match(/^-?\d*(\.\d+)?$/));
       if(!valid) {
           AC.get('ratePerMile').setErrors( {MatchNumber2: true} )
       } else {
           return null
       }
    }


  ngOnInit() {
    this.title = 'Create Load';
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
      this.loadService.getAddresses(this.token)
        .subscribe(
          data => {
            if (data['code'] == 'OK') {
              this.addresses = data['data'];
            } else {
              this.toastr.error("Error in process!", 'Oops!');
            }
          },
          error => {
            this.toastr.error(error.error.errors[0].message, 'Oops!');
      });

      this.equipments = ['type1','type2'];
      this.sizes = ['TL/LTL1','TL/LTL2'];
    }
  }

  saveLoad(){
    this.loadForm.controls['earliestPickupDateTime'].markAsTouched();
    this.loadForm.controls['latestPickupDateTime'].markAsTouched();
    this.loadForm.controls['earliestDropoffDateTime'].markAsTouched();
    this.loadForm.controls['latestDropoffDateTime'].markAsTouched();
    this.loadForm.controls['origin'].markAsTouched();
    this.loadForm.controls['destination'].markAsTouched();
    this.loadForm.controls['equipment'].markAsTouched();
    this.loadForm.controls['load_size'].markAsTouched();
    this.loadForm.controls['weight'].markAsTouched();
    this.loadForm.controls['ratePerMile'].markAsTouched();
    this.loadForm.controls['instructions'].markAsTouched();

    if (this.loadForm.valid) {
      var formData = {
        'data': {
          "shipperId": this.currUser.id,
          "earliestPickupDateTime": this.loadForm.value.earliestPickupDateTime,
          "latestPickupDateTime": this.loadForm.value.latestPickupDateTime,
          "earliestDropoffDateTime": this.loadForm.value.earliestDropoffDateTime,
          "latestDropoffDateTime": this.loadForm.value.latestDropoffDateTime,
          "origin": this.loadForm.value.origin,
          "destination": this.loadForm.value.destination,
          "equipment": this.loadForm.value.equipment,
          "load_size": this.loadForm.value.load_size,
          "weight": this.loadForm.value.weight,
          "ratePerMile": this.loadForm.value.ratePerMile,
          "instructions": this.loadForm.value.instructions
        }
      }

      console.log(formData);

      this.loadService.createLoad(this.token,formData)
        .subscribe(
          data => {
            if (data['code'] == 'OK') {
              this.toastr.success("Created load successfully.", 'Success');
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
