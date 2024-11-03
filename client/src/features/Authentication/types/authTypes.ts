export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType extends LoginType {
  username: string;
  first_name: string;
  last_name: string;
  re_password: string;
}
