export type Role = 'admin' | string;

export type GetUserType = {
  uid: string;
  roles: Role[];
};
