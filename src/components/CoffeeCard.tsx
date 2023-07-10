import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { Increment } from "./Increment";

export interface ICoffeeCard {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  tags: string;
}

export function CoffeeCard({
  id,
  name,
  description,
  img,
  price,
  tags,
}: ICoffeeCard) {
  const { addCoffeeToCart } = useCart();

  const [formattedPrice, setFormattedPrice] = useState("");

  const [incrementValue, setIncrementValue] = useState(1);

  const handleChangeIncrementValue = (type: "add" | "sub") => {
    if (type === "add") {
      setIncrementValue((state) => (state += 1));
    } else if (type === "sub") {
      if (incrementValue === 1) return;
      setIncrementValue((state) => (state = state -= 1));
    }
  };

  const handleAddCoffeeToCart = () => {
    const coffeeToAdd = {
      id,
      name,
      description,
      img,
      price,
      tags,
      quantity: incrementValue,
    };
    addCoffeeToCart(coffeeToAdd);
  };

  const priceFormatted = (price: number) => {
    const formatted = new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      style: "decimal",
      minimumFractionDigits: 2,
    }).format(price);
    setFormattedPrice(formatted);
  };

  useEffect(() => {
    priceFormatted(price);
  }, [price]);
  return (
    <div className="bg-gray-200 rounded-md rounded-tr-[36px] rounded-bl-[36px] w-[256px] relative">
      <div className="flex px-5 flex-col items-center justify-center relative -top-5">
        <img className="w-[120px] h-[120px]" src={img} alt={name} />
        <div className="flex flex-col w-full items-center justify-center">
          <div className="mt-4 mb-5">
            <span className="uppercase bg-yellow-400 text-yellow-700 font-bold rounded-full px-2 py-1 text-xs leading-3">
              Tradicional
            </span>
          </div>
          <h3 className="font-bold text-xl leading-7 text-center mb-2">
            {name}
          </h3>
          <div className="text-sm text-center font-normal text-stone-400 mb-8">
            {description}
          </div>
          <div className="flex gap-5 items-center justify-center px-1 w-full">
            <div className="text-sm flex items-center gap-1">
              R${" "}
              <span className="font-cursive text-2xl font-extrabold leading-8">
                {formattedPrice}
              </span>
            </div>
            <div className="flex gap-2">
              <Increment
                onAddItemInCart={() => handleChangeIncrementValue("add")}
                onSubItemInCart={() => handleChangeIncrementValue("sub")}
                coffeeAmount={incrementValue}
              />
              <button
                onClick={handleAddCoffeeToCart}
                className="text-white p-2 rounded-md bg-purple-700 hover:bg-purple-500 transition-colors"
              >
                <ShoppingCart weight="fill" width={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
