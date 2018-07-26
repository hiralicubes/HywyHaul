import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthenticationsComponent } from './authentications.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[
    BrowserModule,
  ],
  declarations: [AuthenticationsComponent]
})
export class AuthenticationsModule { }
