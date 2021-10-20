import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  toggle:boolean =true;
  constructor() { }
  setToggle(){
   this.toggle = !this.toggle;
  }
}
