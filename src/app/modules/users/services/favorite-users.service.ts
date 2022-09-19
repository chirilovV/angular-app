import {Injectable} from '@angular/core';
import {EntitiesEnum} from '../../core/Enums/entities.enum';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.interface';
import {FavoriteService} from '../../shared/services/favorite.service';
import {UsersResourceService} from './users-resource.service';


@Injectable ({
  providedIn: 'root'
})
export class FavoriteUsersService {

  constructor (private favoritesService: FavoriteService, private usersService: UsersResourceService) { }

  toggleFavorites (id: string): void {
    this.favoritesService.toggleFavorites (EntitiesEnum.user, id);
  }

  getFavorites (): Observable<User[]> {
    let favoriteUsers: User[] = [];

    this.favoritesService.getItems (EntitiesEnum.user).subscribe (value => {
      favoriteUsers = this.usersService.getLocalUsers ().filter (
        item => value.includes (item.id)).map (
        user => (
          {...user, isFavorite: true}
        ));
    });

    return of (favoriteUsers);
  }
}
