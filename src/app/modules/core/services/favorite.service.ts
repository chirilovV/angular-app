import {Injectable} from "@angular/core";
import {Favorite} from "../models/favorite.interface";
import {EntitiesEnum} from "../Enums/entities.enum";

@Injectable({
  providedIn: 'root'
})

export class FavoriteService {
  private favoritesItems: Favorite[] = [
    {itemId: 'a1', discriminator: EntitiesEnum.car},
    {itemId: 'a4', discriminator: EntitiesEnum.user}
  ];

  constructor() {
  }

  getItems(entityType: EntitiesEnum) {
    return this.favoritesItems.filter(item => {
      return (item.discriminator === entityType)
    })
  }

  addItem(item: Favorite): void {
    this.favoritesItems.push(item);
  }
}
