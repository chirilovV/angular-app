import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpService} from '../../core/services/http.service';
import {HttpMethods} from '../../core/Enums/http-methods.enum';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  apiURL: string = 'http://localhost:4200';

  constructor(private httpService: HttpService) {}

  public uploadImage(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    this.httpService.dispatchData({
      method: HttpMethods.Post,
      url: `${this.apiURL}/uploadFile`,
      options: {
        body: formData
      }
    });

    return of('File was uploaded successfully').pipe(delay(1000));
  }
}
