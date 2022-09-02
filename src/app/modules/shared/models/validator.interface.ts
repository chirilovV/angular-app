import {FormControl} from "@angular/forms";

export interface IValidator<T extends FormControl> {
  (c: T): { [error: string]: any };
}
