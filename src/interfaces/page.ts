export type PageType = 'frontpage' | 'beers';

export interface IPages {
  name: string;
  action?: PageType;
}
