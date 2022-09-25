import {NgModule} from '@angular/core';
import {AddCarComponent} from './components/add-car/add-car.component';
import {CarsListComponent} from './components/cars-list/cars-list.component';
import {CarsPageComponent} from './pages/cars-page/cars-page.component';
import {CarFavoriteListComponent} from './components/car-favorite-list/car-favorite-list.component';
import {CarsRoutingModule} from './cars-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AddCarComponent,
    CarsListComponent,
    CarsPageComponent,
    CarFavoriteListComponent
  ],
  exports: [],

  imports: [
    CarsRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    MatCardModule,
  ]
})
export class CarsModule {
}
