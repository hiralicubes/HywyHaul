import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from '../common/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PagesRoutingModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
