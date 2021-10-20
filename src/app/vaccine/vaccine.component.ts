import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  selectedCountry:string;
  vaccinatedList = [];
  vaccinated_country = [];
  constructor(private vaccine_service:DataService) { }

  ngOnInit(): void {
    this.selectedCountry = 'India';
      this.vaccine_service.getVaccinatedCountry().subscribe((data) => {
      this.vaccinated_country.push(data);
    });
    this.onChange(this.selectedCountry)
  }
  onChange(event){
    this.vaccinatedList = [];
    this.vaccine_service.getVaccineData(`${event}`).subscribe((data) => {
      this.vaccinatedList.push(data);
    });
  }
}
