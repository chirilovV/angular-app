import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AddCarComponent} from "./components/add-car/add-car.component";
import {CarsListComponent} from './components/cars-list/cars-list.component';
import {CarsPageComponent} from './pages/cars-page/cars-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CarFavoriteListComponent} from './components/car-favorite-list/car-favorite-list.component';
import {SharedModule} from "../shared/shared.module";
import {UsersModule} from "../users/users.module";


@NgModule({
  declarations: [
    AddCarComponent,
    CarsListComponent,
    CarsPageComponent,
    CarFavoriteListComponent
  ],
  exports: [],

  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    NoopAnimationsModule,
    FormsModule,
    UsersModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class CarsModule {
}
