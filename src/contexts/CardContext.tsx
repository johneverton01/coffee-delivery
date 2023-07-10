import { produce } from "immer";
import { ReactNode, createContext, useEffect, useState } from "react";
import { ICoffeeCard } from "../components/CoffeeCard";

export interface CartItem extends ICoffeeCard {
  quantity: number;
}

export interface AddressType {
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

interface CardContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  salesOrder: SalesOrderType;
  addCoffeeToCart: (coffee: CartItem) => void;
  finishOrder: (salesOrder: SalesOrderType) => void;
  changeCartItemQuantity: (cartItemId: string, type: "add" | "sub") => void;
  removeCartItem: (cartItemId: string) => void;
}

export interface SalesOrderType {
  cartItems: CartItem[];
  address: AddressType;
  paymentMethod?: 'credit' |'debit' | 'money';
}

interface CardContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "@CoffeeShop:cartItems";

export const CardContext = createContext({} as CardContextType);

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storageCartItems) {
      return JSON.parse(storageCartItems);
    }
    return [];
  });
  const [salesOrder, setSalesOrder] = useState<SalesOrderType>({} as SalesOrderType);

  const cartQuantity = cartItems.reduce((acc, item: CartItem) => {
    acc = acc + item.quantity
    return acc;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExists].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(cartItemId: string, type: "add" | "sub") {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === "add" ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: string) {
    const newCart = cartItems.filter(
      (cartItem) => cartItem.id !== cartItemId
    )
    setCartItems(newCart);
  }

  function finishOrder(salesOrder: SalesOrderType) {
    setSalesOrder(salesOrder);
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CardContext.Provider value={{
      cartItems,
      cartQuantity,
      salesOrder,
      addCoffeeToCart,
      finishOrder,
      changeCartItemQuantity,
      removeCartItem,
    }}>
      {children}
    </CardContext.Provider>
  );
}
