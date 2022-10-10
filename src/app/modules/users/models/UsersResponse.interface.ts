import {User} from './user.interface';

export interface UsersResponse {
  incomplete_results: boolean,
  items: User[],
  total_count: number
}
