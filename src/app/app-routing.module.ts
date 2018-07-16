import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { AuthenticationsComponent } from './authentications/authentications.component';
import { LoignComponent } from './authentications/loign/loign.component';
import { RegisterComponent } from './authentications/register/register.component';
import { ForgotComponent } from './authentications/forgot/forgot.component';

const routes: Routes = [
    // { path: '', component: AuthenticationsComponent }
    { path: '', component: LoignComponent },
    { path: 'login', component: LoignComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot', component: ForgotComponent },
    
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: [
    // AuthenticationsComponent,
    LoignComponent,
    RegisterComponent,
    ForgotComponent
  ]
})
export class AppRoutingModule { }