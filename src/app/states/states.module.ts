import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { StatesRoutingModule } from './states-routing.module';
import { StateComponent } from './state.component';


@NgModule({
  declarations: [
    StateComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
    StatesRoutingModule
  ]
})
export class StatesModule { }
