export interface User {
  uid: string;
  name: string | null;
  photo: string | null;
  email: string | null;
  phone: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  provider: string;
}
