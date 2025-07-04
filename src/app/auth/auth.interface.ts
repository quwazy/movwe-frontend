export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CreateClient {
  email: string;
  password: string;
  username: string;
  address: {
    street: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    phone: string | null;
  }
}
