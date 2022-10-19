export interface LayoutProps {
  children?: React.ReactNode;
}

export interface StatusDataProps {
  updated: string;
  image: string;
  user: string;
}

export type RegisterTypes = {
  name: string;
  email: string;
  password: string;
};

export type UserTypes = {
  isOnline: boolean;
  _id: string;
  name: string;
  email: string;
  lastOnline: string;
  createdAt: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};
