import {Injectable} from '@angular/core';
import {FavoriteService} from '../../shared/services/favorite.service';
import {User} from '../models/user.interface';
import {Observable} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {HttpMethods} from '../../core/Enums/http-methods.enum';
import {UserResponse} from '../models/UserResponse.interface';
import {PageOptions} from '../../shared/models/pageOptions';

@Injectable({
  providedIn: 'root'
})

export class UsersApiService {
  private apiURL = 'https://api.github.com';
  private defaultPageOptions: PageOptions = {
    pageIndex: 0,
    pageSize: 5
  };

  constructor(
    private favoritesService: FavoriteService,
    private httpService: HttpService
  ) {
  };

  getUsers(paginatorOption?: PageOptions,): Observable<UserResponse> {
    let pageOption = paginatorOption ? paginatorOption : this.defaultPageOptions;

    return this.httpService.dispatchData({
      method: HttpMethods.Get,
      url: this.apiURL + `/search/users?per_page=${pageOption.pageSize}&page=${pageOption.pageIndex}&q=${pageOption.pageIndex}`,
      options: {}
    });
  }

  getUser(login: string): Observable<User | undefined> {
    return this.httpService.dispatchData({
      method: HttpMethods.Get,
      url: this.apiURL + `/users/${login}`,
      options: {}
    });
  }

  updateUser(id: string, userForm: any): Observable<string> {
    return this.httpService.dispatchData({
      method: HttpMethods.Put,
      url: this.apiURL + `/user?q=${id}+in:id`,
      options: {body: userForm}
    });
  }

  addNewUser(newUser: User): void {
    this.httpService.dispatchData({
      method: HttpMethods.Put,
      url: this.apiURL + `/addNewUser`,
      options: {body: newUser}
    });
  }

  search(keyword: string): Observable<any> {
    return this.httpService.dispatchData({
      method: HttpMethods.Get,
      url: this.apiURL + `/search/users?q=${keyword}+in:name`,
      options: {}
    });
  }

  findUserByEmail(email: string): Observable<any> {
    return this.httpService.dispatchData({
      method: HttpMethods.Get,
      url: this.apiURL + `/search/users?q=${email}+in:email`,
      options: {}
    });
  }
}
