import { Minus, Plus } from "phosphor-react";

interface IncrementProps {
  onAddItemInCart: () => void;
  onSubItemInCart: () => void;
  coffeeAmount: number;
}

export function Increment({   
  coffeeAmount,
  onAddItemInCart,
  onSubItemInCart
}: IncrementProps) {
  return (
    <div 
      className="flex bg-gray-400 p-2 w-full max-w-[72px] rounded-md outline-none"
    >
      <button 
        className="text-purple-500 font-semibold disabled:cursor-not-allowed"
        type="button"
        disabled={coffeeAmount <= 1}
        onClick={() => onSubItemInCart()}
      >
        <Minus />
      </button>
      <input 
        className="w-full bg-transparent text-center border-none outline-none text-gray-900"
        value={coffeeAmount}
        readOnly
      />
      <button 
        className="text-purple-500 font-semibold outline-none"
        type="button"
        onClick={() => onAddItemInCart()}
      >
        <Plus />
      </button>
    </div>
  )
}