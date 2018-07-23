import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoignComponent } from './loign.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule
  ],
  exports:[
    
  ],
  declarations: [LoignComponent],
  
})
export class LoignModule { }
