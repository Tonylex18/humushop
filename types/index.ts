import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
export interface customButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  img?: any;
}

export interface allCategoriesProps {
  id?: number | string | any;
  img: string | any;
  subImg?: string | any;
  subImg2?: string | any;
  title?: string | any;
  desc?: string;
  detailDesc?: string;
  formerCost?: string;
  currentCost?: string | number;
  btnText?: string;
  color?: string | any;
  onAddToCart?: any;
  category?: string;
  quantity?: string;
}
export interface ourShopCategoriesProps {
  id: number;
  img: string;
  desc: string;
}
export interface contextProps {
  children: ReactNode;
}
