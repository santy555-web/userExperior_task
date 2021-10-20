import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public _countryData = [];
  public countryList = [];
  public selectedCountry: string;
  public temp: any;
  public activeCases: any;
  public cases_per_million: any;
  public active_ratio: any;
  public recovery_ratio: any;
  public death_ratio: any;
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.selectedCountry = 'India';
    this.onCountryChange(this.selectedCountry);
    this.service.getCountryData('').subscribe((data) => {
      this.countryList.push(data);
    });
  }

  onCountryChange(event) {
    this._countryData = [];
    this.service.getCountryData(`${event}`).subscribe((data) => {
      this._countryData.push(data);
      this.temp = data;
      this.activeCases =
        this.temp.All.confirmed -
        (this.temp.All.recovered + this.temp.All.deaths);
      this.cases_per_million =
        (this.temp.All.confirmed / this.temp.All.population) * 1000000;
      this.active_ratio = (this.activeCases / this.temp.All.confirmed) * 100;
      this.recovery_ratio =
        (this.temp.All.recovered / this.temp.All.confirmed) * 100;
      this.death_ratio = (this.temp.All.deaths / this.temp.All.confirmed) * 100;
    });
  }
}
