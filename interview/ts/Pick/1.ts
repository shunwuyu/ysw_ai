type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string; // 敏感信息
  createdAt: Date;
};

type SimpleUser = Pick<User, 'id' | 'name' | 'email'>;

type SafeUser = Omit<User, 'password'>;