import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() { }

  generateRandomNumber(max: number, min: number) {
    let interval = (max - min + 1);
    let randomNumber = Math.random() * interval;

    return Math.floor(randomNumber) + min;
  }

}
