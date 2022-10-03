import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {AppRouteEnum} from '../Enums/appRouteEnum';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.authService.getAuthToken();

    if(token) {
      request = request.clone({
        setHeaders: {Authorization: `Authorization token ${token}`}
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if(err instanceof HttpErrorResponse) {
          if(401 === err.status) {
            this.router.navigate([AppRouteEnum.Default]);
          }
        }
        return throwError(err);
      })
    );
  }
}
