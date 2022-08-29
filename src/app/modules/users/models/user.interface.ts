import {GenderEnum} from "../../core/Enums/gender.enum";

export interface User {
  id: string,
  name: string,
  age: number,
  gender: GenderEnum,
  imageUrl: string
  department: string,
  company: string,
}
