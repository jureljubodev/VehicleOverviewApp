import { Injectable } from '@angular/core';
import { VEHICLES } from './vehicle.constants';
import { VehicleModel } from './vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  searchData: VehicleModel[] = [];
  searchInput: string = '';

  constructor() {}

  public getVehicles(searchInput: string): VehicleModel[] {
    this.searchData = [];
    VEHICLES.map((car) => {
      if (car.manufacturer === searchInput) {
        this.searchData.push(car);
        console.log(this.searchData);
      } else if (car.name.includes(searchInput)) {
        this.searchData.push(car);
      } else if (car.model.includes(searchInput)) {
        this.searchData.push(car);
      } else if (car.year === Number(searchInput)) {
        this.searchData.push(car);
      } else if (car.type.includes(searchInput)) {
        this.searchData.push(car);
      } else if (car.fuelType.includes(searchInput)) {
        this.searchData.push(car);
      } else if (car.active === true && searchInput === 'true') {
        this.searchData.push(car);
      } else if (car.active === false && searchInput === 'false') {
        this.searchData.push(car);
      } else {
        ('return undefined;');
      }
    });
    return this.searchData;
  }
}
