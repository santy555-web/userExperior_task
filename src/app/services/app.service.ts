import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
    countryurl=environment.country_list;
  constructor(private http:HttpClient) { }

   getCountryData(county:string){
     return this.http.get(environment.country_list + county);
   }
  // getCountryData(){
  //       return this.http.get(environment.country_list);
  //     }
   getStateData(county:string){
    return this.http.get(environment.state_details + county);
  }
  getVaccineData(county:string){
    return this.http.get(environment.vaccine_detail + county);
  }
  getVaccinatedCountry(){
    return this.http.get(environment.vaccinated_country);
  }
}
