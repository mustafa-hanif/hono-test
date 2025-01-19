import type { users, session } from '@prisma/client';
export interface IDays {
  id: string;
  name: string;
  description: string;
  active: boolean;
  created: Date;
  update: string;
  created_by: string;
}

export interface IStocks {
  id: string;
  days: string;
  bank_name: string;
  created: Date;
  update: string;
  created_by: string;
}

export interface IStocksAndHeading {
  id: string;
  stocks: string;
  headings: string;
  previous_price: number;
  current_price: number;
  change_in_price: number;
  percentage_change_in_price: string;
  expand: {
    headings: IHeading;
    stocks: IStocks;
  };
}

export interface IHeading {
  id: string;
  name: string;
  day: string;
  active: boolean;
  heading_number: number;
}

export interface ICompetition {
  id: string;
  name: string;
  active: boolean;
  pause: boolean;
  ended: boolean;
}

export interface ITimer {
  id: string;
  competition_start: Date;
  competition_end: Date;
  active: boolean;
  round_time: number;
}

export interface IUser {
  id: string;
  email: string;
  emailVisibility: boolean;
  name: string;
  username: string;
  verified: boolean;
  avatar?: string; // Optional field, as the avatar is an empty string in the provided data
  collectionId: string;
  collectionName: string;
  wallet: string;
  created: Date;
  updated: Date;
  type: string;
}

export interface IExpandedUser {
  id: string;
  email: string;
  emailVisibility: boolean;
  name: string;
  username: string;
  verified: boolean;
  avatar?: string; // Optional field, as the avatar is an empty string in the provided data
  collectionId: string;
  collectionName: string;
  wallet: string;
  created: Date;
  updated: Date;
  type: string;
  expand: {
    stocks_users_via_users: IStocksAndUsers[];
  };
}

export interface IStocksAndUsers {
  id: string;
  stocks: string;
  users: string;
  share_count: string;
  balance_when_shorting: string;
  short_share_count: string;
  expand: {
    stocks: IStocks;
    users: IUser;
  };
}

export type ContextType = {
  user: users | null;
  session: session | null;
};
