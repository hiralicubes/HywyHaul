import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoignComponent } from './loign.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[

  ],
  declarations: [LoignComponent],

})
export class LoignModule { }
