import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestConfig} from '../Enums/RequestConfig';
import {catchError, Observable, retry, throwError} from 'rxjs';

@Injectable ({
  providedIn: 'root'
})
export class HttpService {

  constructor (private httpClient: HttpClient) { }

  dispatchData (config: RequestConfig): Observable<any> {
    return this.httpClient.request (
      config.method,
      config.url,
      {...config.options}
    ).pipe (retry (1), catchError (this.handleError));
  }

  handleError (error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
//    window.alert (errorMessage);
    return throwError (() => {
      return errorMessage;
    });
  }
}
