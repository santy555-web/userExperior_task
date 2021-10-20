import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { StatesRoutingModule } from './states-routing.module';
import { StateComponent } from './state.component';
import { ToastrModule } from 'ngx-toastr';

import { MyToasterService } from '../services/toastr.service';
@NgModule({
  declarations: [
    StateComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ToastrModule.forRoot(),
     StatesRoutingModule
  ],
  providers:[ MyToasterService]
})
export class StatesModule { }
