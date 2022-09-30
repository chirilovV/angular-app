import {GenderEnum} from '../../core/Enums/gender.enum';
import {Address} from './address.interface';

export interface User {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  gender: GenderEnum,
  imageUrl: string,
  department: string,
  company: string,
  salary?: number,
  currency?: string,
  isFavorite?: boolean,
  addresses?: Address[]
}
