import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccineRoutingModule } from './vaccine-routing.module';
import { VaccineComponent } from './vaccine.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    VaccineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VaccineRoutingModule
  ]
})
export class VaccineModule { }
