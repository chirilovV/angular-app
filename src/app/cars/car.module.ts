
import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AddCarComponent} from "./components/add-car/add-car.component";


@NgModule({
  declarations: [
   AddCarComponent
  ],

    imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        CommonModule,
        NoopAnimationsModule,
        FormsModule
    ]
})
export class CarModule {
}
