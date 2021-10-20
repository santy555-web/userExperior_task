import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  indianData = [];
  countryData = [];
  countryName :string ;
  constructor(private service :AppService) { }

  ngOnInit(): void {
    this.service.getStateData('India').subscribe((data)=>{
      this.indianData.push(data);
    });
    this.service.getCountryData('').subscribe((data) => {
      this.countryData.push(data);
    });
    this.countryName = "India";
  }

  onCountryChange(event){
    this.indianData =[]
    this.service.getCountryData(`${event}`).subscribe((data) => {
      this.indianData.push(data);
    });
  }
}
