import {GenderEnum} from "../../core/Enums/gender.enum";

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
  isFavorite?: boolean
}
