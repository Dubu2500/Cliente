export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  name: string;
  username: string;
  website: string;
  popularSong: string;
  albums?: string[];
  email?: string;
  phone?: string;
  company: Company;
}

export interface UserMap {
  [key: string]: User;
}
