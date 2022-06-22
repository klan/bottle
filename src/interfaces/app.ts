import type { ReactNode } from 'react';
import type { BeerResponse } from 'interfaces/endpoints';

export type PageType = 'frontpage' | 'beers' | 'submit';

export interface IPages {
  name: string;
  action?: PageType;
}

export interface IMenu {
  items: { name: string; action?: PageType }[];
  changePage: (action) => void;
  open: boolean;
}

export interface IDrawer {
  children?: ReactNode;
  open: boolean;
  close: () => void;
}

export interface IGrid {
  items: BeerResponse[];
}

export interface IDetail {
  item: BeerResponse;
}

export interface ICard {
  item: BeerResponse;
}
