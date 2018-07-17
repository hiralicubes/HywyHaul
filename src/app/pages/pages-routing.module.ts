import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    // { path: '', component: AuthenticationsComponent }
    { path: '', component: ProfileComponent },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),  
  ],
  exports: [ RouterModule ],
  declarations: [
    ProfileComponent,    
  ]
})
export class PagesRoutingModule { }