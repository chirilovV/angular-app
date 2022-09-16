import {User} from './user.interface';

export interface UserResponse {
  incomplete_results: boolean,
  items: User[],
  total_count: number
}
