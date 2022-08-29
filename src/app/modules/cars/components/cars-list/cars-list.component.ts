import {Component, OnInit, Output} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../models/car.interface";
import {FavoriteService} from "../../../core/services/favorite.service";
import {EntitiesEnum} from "../../../core/Enums/entities.enum";
import {Favorite} from "../../../core/models/favorite.interface";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  public cars!: Car[];
  @Output() favorites!:Favorite[];

  constructor(
    private carService: CarsService,
    private favoritesService: FavoriteService
  ) {
  }

  ngOnInit(): void {
    this.cars = this.carService.getCars()
    this.favorites= this.favoritesService.getItems(EntitiesEnum.car)
  }

}
