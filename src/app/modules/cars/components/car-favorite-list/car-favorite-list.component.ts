import {Component, DoCheck, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Car} from "../../models/car.interface";
import {CarsService} from "../../services/cars.service";
import {CarListItemComponent} from "../car-list-item/car-list-item.component";

@Component({
  selector: 'car-favorite-list',
  templateUrl: './car-favorite-list.component.html',
  styleUrls: ['./car-favorite-list.component.scss']
})
export class CarFavoriteListComponent implements OnInit, DoCheck {
  @Input() favorites!: Car[];
  @ViewChildren('favorites') carsItems!: QueryList<CarListItemComponent>;
  actionDisplay = 'hidden'

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.getFavoriteCars();
  }

  ngDoCheck() {
    this.getFavoriteCars();
  }

  getFavoriteCars() {
    this.favorites = this.carsService.getFavorites();
  }
}
