import type { PageType } from 'interfaces/page';

export interface IMenu {
  items: { name: string; action?: PageType }[];
  changePage: (action) => void;
  open: boolean;
}
