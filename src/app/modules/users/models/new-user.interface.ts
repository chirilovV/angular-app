import {GenderEnum} from '../../core/Enums/gender.enum';
import {Address} from './address.interface';

export interface LocalUser {
  id: string,
  personalInfo: PersonalInfo,
  companyInfo: CompanyInfo
  addresses?: Address[]
}

export interface PersonalInfo {
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  gender: GenderEnum,
  imageUrl: string,
}

export interface CompanyInfo {
  department: string,
  company: string,
  salary?: number,
  currency?: string,
}
