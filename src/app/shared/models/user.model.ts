export class User {
  id!: number;
  username!: string;
  email!: string;
  password?: string;
  role!: 'admin' | 'customer';
  token?: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isCustomer(): boolean {
    return this.role === 'customer';
  }
}
