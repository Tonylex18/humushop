"use client";
import Card from "@/components/Card";
import { homeData } from "@/constant/data";
import { allCategoriesProps } from "@/types";
import {
  ReactNode,
  ChangeEvent,
  createContext,
  useContext,
  useState,
  InputHTMLAttributes,
} from "react";
import { idText } from "typescript";

interface contextProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleReset: (event: any) => void;
  FilteredData: (homeData: string, selected: any) => void;
  handleClick: (event: ChangeEvent<HTMLInputElement>) => void;
  cartItem: Record<string, number>;
  itemId?: string | null;
  openFilter: boolean;
  setOpenFilter: any;
  carts: allCategoriesProps[];
  orderItems: allCategoriesProps[] | any;
  homeData: allCategoriesProps[];
  result: allCategoriesProps[];
  handleAddToCart: (id: allCategoriesProps) => void;
  handleRemoveFromCart: (id: allCategoriesProps) => void;
  handleOrder: (item: allCategoriesProps) => void;
  removeFromItem: (item: allCategoriesProps) => void;
  handleIncrement: (item: allCategoriesProps) => void;
  handleDecrement: (item: allCategoriesProps) => void;
  handlePriceChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedCategories: any;
  setSelectedCategories: any;
  count: { [key: string]: number };
}
// let filteredProducts = homeData;

const getCart = () => {
  let cart: Record<string, number> = {};
  for (let i = 0; i < homeData.length + 1; i++) {
    cart[i.toString()] = 0;
  }
  return cart;
};
const appDefaultValue: contextProps = {
  handleReset: () => {},
  handleClick: (event: ChangeEvent<HTMLInputElement>) => {},
  cartItem: getCart(),
  openFilter: true || false,
  FilteredData: () => {},
  handleChange: (event: ChangeEvent<HTMLInputElement>) => {},
  setOpenFilter: true || false,
  result: [],
  itemId: null,
  carts: [],
  count: {},
  orderItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  homeData: [],
  handleOrder: () => {},
  removeFromItem: () => {},
  handleIncrement: () => {},
  handleDecrement: () => {},
  handlePriceChange: (event: ChangeEvent<HTMLInputElement>) => {},
  selectedCategories: [],
  setSelectedCategories: true || false,
};
export const GlobalContext = createContext<contextProps>(appDefaultValue);

export const GlobalState = ({ children }: { children: ReactNode }) => {
  const [cartItem, setCartItem] = useState<Record<string, number>>(getCart());
  const [carts, setCarts] = useState<any>([]);
  const [orderItems, setOrderItems] = useState<any>([]);

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<any>(0);
  const [count, setCount] = useState<{ [key: number]: number }>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(event.target.value);
    setOpenFilter(false);
  };
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(event.target.value);
    setOpenFilter(false);
  };

  // FILTER BY PRICES
  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(setSelectedCategories(parseInt(event.target.value, 10)));
  };
  const handleReset = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(""); // Clear the filter by setting selectedCategories to null
  };
  const FilteredData = (homeData: any, selected: string | number) => {
    let filteredProducts = homeData.slice();
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, currentCost }: allCategoriesProps) => {
          const convertedCurrentCost = Number(
            (currentCost as string).split(" ")[1].replace(",", "")
          );
          return (
            category === selected ||
            color === selected ||
            convertedCurrentCost === selected
          );
        }
      );
    }
    return filteredProducts;
  };

  const result = FilteredData(homeData, selectedCategories);

  const handleAddToCart = (homeData: allCategoriesProps) => {
    const productExit = carts.find(
      (item: allCategoriesProps) => item.id === homeData.id
    );
    // console.log(carts.id);
    // console.log(typeof homeData.id);
    // console.log(productExit);
    if (productExit) {
      setCarts(
        carts.map((item: allCategoriesProps) =>
          item.id === homeData.id
            ? {
                ...productExit,
                quantity: productExit.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCarts([...carts, { ...homeData, quantity: 1 }]);
    }
  };
  // console.log(typeof(quantity))

  const handleRemoveFromCart = (homeData: allCategoriesProps) => {
    const productExit = carts.find((item: any) => item.id === homeData.id);
    if (productExit.quantity === 1) {
      setCarts(carts.filter((item: any) => item.id !== homeData.id));
    } else {
      setCarts(
        carts.map((item: any) =>
          item.id === homeData.id
            ? { ...productExit, quantity: productExit.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleOrder = (item: allCategoriesProps) => {
    const updatedCart = carts.filter((cart: any) => cart !== item);
    setCarts(updatedCart);
    setOrderItems([...orderItems, item]);
  };

  const removeFromItem = (item: allCategoriesProps) => {
    const removeCart = orderItems.filter((cart: any) => cart.id !== item.id);
    setOrderItems(removeCart);
    // setOrderItems([]);
  };
  const handleIncrement = (homeData: allCategoriesProps) => {
    const productExit = orderItems.find(
      (orderItem: allCategoriesProps) => orderItem.id === homeData.id
    );
    if (productExit) {
      setOrderItems(
        orderItems.map((orderItem: allCategoriesProps) =>
          orderItem.id === homeData.id
            ? {
                ...productExit,
                quantity: productExit.quantity + 1,
              }
            : orderItem
        )
      );
    }
  };
  const handleDecrement = (homeData: allCategoriesProps) => {
    const productExit = orderItems.find((item: any) => item.id === homeData.id);
    if (productExit.quantity === 1) {
      setOrderItems(orderItems.filter((item: any) => item.id !== homeData.id));
    } else {
      setOrderItems(
        orderItems.map((item: any) =>
          item.id === homeData.id
            ? { ...productExit, quantity: productExit.quantity - 1 }
            : item
        )
      );
    }
  };

  const value = {
    cartItem,
    result,
    handleChange,
    handleClick,
    handleReset,
    openFilter,
    FilteredData,
    setOpenFilter,
    carts,
    orderItems,
    handleAddToCart,
    handleRemoveFromCart,
    homeData,
    handleOrder,
    removeFromItem,
    handleIncrement,
    handleDecrement,
    selectedCategories,
    setSelectedCategories,
    handlePriceChange,
    count,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
