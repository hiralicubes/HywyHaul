import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from "./_services/user/user.service";
import { LoadService } from "./_services/load/load.service";
import { AppGlobals } from './app.globals';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// import { LoginModule } from './authentications/loign/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    // LoginModule,
  ],
  exports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    LoadService,
    AppGlobals,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
