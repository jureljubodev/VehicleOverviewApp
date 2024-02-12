import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleModel } from 'src/app/core/vehicle/vehicle.model';
import { VehicleService } from 'src/app/core/vehicle/vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchInput: string = '';
  searchData: VehicleModel[] = [];

  constructor(private router: Router, private vehicleService: VehicleService) {}
  logout() {
    console.log('User Logged Out');
    this.router.navigate(['/']);
  }

  getSearchResults() {
    this.searchData = this.vehicleService.getVehicles(this.searchInput);
  }
}
