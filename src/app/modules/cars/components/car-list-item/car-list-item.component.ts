import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../models/car.interface";
import {FavoriteService} from "../../../core/services/favorite.service";
import {EntitiesEnum} from "../../../core/Enums/entities.enum";

@Component({
  selector: 'car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  @Input() car!: Car;
  @Input() actionDisplay='';
  // @Output() newItemEvent = new EventEmitter<Favorite>();

  constructor(private favoriteService:FavoriteService) {
  }

  ngOnInit(): void {
  }

  makeAsFavorites() {
    this.favoriteService.addItem({itemId: this.car.id, discriminator: EntitiesEnum.car});
  }

}
