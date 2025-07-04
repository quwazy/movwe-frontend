export interface AddClient {
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
