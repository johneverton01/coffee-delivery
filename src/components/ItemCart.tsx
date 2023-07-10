import { Trash } from "phosphor-react";
import { useCart } from "../hooks/useCart";
import { formatMoney } from "../utils/formatMoney";
import { Increment } from "./Increment";

interface ItemCartProps {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

export function ItemCart({ id, image, name, quantity, price }: ItemCartProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const totalItems = quantity * price
  const formattedTotalItems = formatMoney(totalItems)
  const handleRemoveCartItem = () => removeCartItem(id)
  
  return (
    <div className="flex justify-between items-start border border-b-gray-400 pb-6 mb-6">
      <div className="flex gap-5">
        <img className="w-16 h-16" src={image} alt="" />
        <div className="flex flex-col gap-2">
          <span className="text-stone-600 text-base">{name}</span>
          <div className="flex gap-2">
            <Increment 
              onAddItemInCart={() => changeCartItemQuantity(id, "add")}
              onSubItemInCart={() => changeCartItemQuantity(id, "sub")}
              coffeeAmount={quantity}
            />
            <button
              onClick={handleRemoveCartItem}
              className="flex gap-1 items-center bg-gray-400 p-2 w-full rounded-md outline-none hover:bg-gray-500 transition-colors">
              <Trash className="text-purple-500" width={16} height={16} />
              <span className="uppercase text-xs text-stone-500">Remover</span>
            </button>
          </div>
        </div>
      </div>
      <div className="font-bold text-stone-500 whitespace-nowrap">{formattedTotalItems}</div>
    </div>
  );
}
