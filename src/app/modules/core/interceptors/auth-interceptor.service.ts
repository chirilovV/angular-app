import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor {
//
//  constructor(private authService: AuthService, private router: Router) { }
//
//  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
//    const token = this.authService.getAuthToken();
//
//    if(token) {
//      request = request.clone({
//        setHeaders: {Authorization: `Authorization token ${token}`}
//      });
//    }
//
//    return next.handle(request).pipe(
//      catchError((err) => {
//        if(err instanceof HttpErrorResponse) {
//          if(401 === err.status) {
//            this.router.navigate([AppRouteEnum.Default]);
//          }
//        }
//        return throwError(err);
//      })
//    );
//  }
}
