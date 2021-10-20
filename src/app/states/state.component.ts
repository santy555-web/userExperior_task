import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MyToasterService } from '../services/toastr.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  selectedCountryData = [];
  countryData = [];
  countryName :string ;
  temp;
  result;
  constructor(private service :DataService, private toaster: MyToasterService) { }

  ngOnInit(): void {
    this.service.getCountryData('').subscribe((data) => {
      this.countryData.push(data);
    });
    this.countryName = "India";
    this.onCountryChange(this.countryName)

  }

  onCountryChange(event){
    this.selectedCountryData =[]
    this.service.getCountryData(`${event}`).subscribe((data) => {
      this.selectedCountryData.push(data);
      this.temp = data;
      let array_2 = Object.keys(this.temp).map((key) => [String(key), this.temp[key]]);
      this.result = array_2.filter((element, index) => index > 0);
      if(this.result.length ===0)
      {
        this.toaster.showToast('Error', 'There is no State!!!', 'error');
      }
    });

  }

}
