import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(age: number): unknown {
    return `${age} years`;
  }

}
