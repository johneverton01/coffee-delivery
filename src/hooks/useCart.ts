import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

export function useCart() {
  const context = useContext(CardContext);
  return context;
}