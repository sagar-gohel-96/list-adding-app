type User = {
  name: string | undefined;
  address: string;
  mobileNo?: number;
  email: string;
};

export type PartialUser = Partial<User>