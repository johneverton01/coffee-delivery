import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.svg";
import { useCart } from "../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();
  return (
    <div className="sticky top-0 bg-white z-50 md:w-screen max-w-[1120px]">
      <header className="flex justify-between py-8 w-full">
        <NavLink to="/" title="Coffe Delivery">
          <img src={Logo} alt="Coffe Delivery" />
        </NavLink>
        <div className="flex gap-3 justify-between items-center h-9">
          <span className="flex gap-1 items-center bg-purple-400 text-purple-700 p-2 rounded-md h-full">
            <MapPin weight="fill" width={22} />
            Belo Horizonte, MG
          </span>
          <NavLink
            className="p-2 bg-yellow-400 text-yellow-700 rounded-md h-full flex justify-center items-center relative"
            to="/checkout"
            title="Carrinho"
          >
            {cartQuantity >= 1 && (
              <span className="absolute -top-2 -right-2 bg-yellow-700 text-white w-5 h-5 rounded-full flex justify-center items-center p-1 text-xs font-bold">
                {cartQuantity}
              </span>
            )}
            <ShoppingCart weight="fill" width={22} />
          </NavLink>
        </div>
      </header>
    </div>
  );
}
