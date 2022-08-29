import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {EntitiesEnum} from "../../../core/Enums/entities.enum";
import {FavoriteService} from "../../../core/services/favorite.service";

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() user!: User;
  @Input() actionDisplay='';

  constructor(private favoriteService:FavoriteService) {
  }

  ngOnInit(): void {
  };

  makeAsFavorites() {
    this.favoriteService.addItem({itemId: this.user.id, discriminator: EntitiesEnum.user});
  }
}
