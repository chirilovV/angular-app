export interface RandomUser {
  id: {
    name: string
    value: string
  },
  name: {
    first: string
    last: string
    title: string
  },
  dob: {
    age: number,
    date: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  gender: string,
  email: string
}
