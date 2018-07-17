import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from '../common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderComponent
  ],
  exports: [
    PagesRoutingModule,
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
