/*export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  image:string
};*/
// @/types/menu.ts
export interface SubmenuItem {
  path: string;
  title: string;
}

export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  image?: string;
  submenu?: SubmenuItem[];
}

