export interface Client {
  id: number;
  email: string;
  username: string;
  active: boolean;
}

export interface LoginResponse {
  token: string;
}
