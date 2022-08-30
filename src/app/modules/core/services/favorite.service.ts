import {Injectable} from "@angular/core";
import {EntitiesEnum} from "../Enums/entities.enum";

type FavoriteStorage = {
  [key in EntitiesEnum]: string[];
}

@Injectable({
  providedIn: 'root'
})

export class FavoriteService {
  private favorites: FavoriteStorage = {
    [EntitiesEnum.car]: [],
    [EntitiesEnum.user]: [],
  };

  constructor() {
  }

  getItems(entityType: EntitiesEnum): string[] {
    return this.favorites[entityType]
  }

  toggleFavorites(type: EntitiesEnum, id: string): void {
    let index = this.favorites[type].indexOf(id);
    if (index == -1) {
      this.favorites[type].push(id);
    } else {
      this.favorites[type].splice(index, 1);
    }
  }
}