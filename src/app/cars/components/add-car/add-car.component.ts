import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Car} from "../../models/car.interface";

@Component({
  selector: 'app-cars',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  cars: Car[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  carFormControl = new FormControl(
    '',
    [
      Validators.minLength(4),
      Validators.maxLength(30),
    ]);

  addNewCar() {
    this.cars.push(<Car>{name: this.carFormControl.value});
    this.clear()
  }

  clear(){
    this.carFormControl.reset();
  }
}
