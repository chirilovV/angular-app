import {Component} from '@angular/core';
import {Car} from "../../models/car.interface";

@Component({
  selector: 'app-cars',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {
  cars: Car[] = [];
  carFormControl: string = 'Audi A7';

  addNewCar() {
    if (this.carFormControl !== '') {
      this.cars.push(<Car>{name: this.carFormControl});
      this.clear();
    }
  }

  clear(): void {
    this.carFormControl = '';
  }

}
