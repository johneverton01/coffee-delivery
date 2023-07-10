import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCart } from "../../components/ItemCart";
import { ToggleButton } from "../../components/ToggleButton";
import { AddressType, SalesOrderType } from "../../contexts/CardContext";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

const deliveryFormSchema = z.object({
  zipCode: z.string().min(8, "CEP inválido").max(8, "CEP inválido"),
  street: z.string().min(3, "Rua inválida"),
  number: z.string().min(1, "Número inválida"),
  neighborhood: z.string().min(3, "Bairro inválida"),
  city: z.string().min(2, "Cidade inválida"),
  uf: z.string().min(2, "UF inválido").max(2, "UF inválida"),
  complement: z.optional(z.string()),
});

type deliveryFormSchemaType = z.infer<typeof deliveryFormSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<
    "credit" | "money" | "debit" | undefined
  >();

  const { cartItems, cartQuantity, finishOrder } = useCart();
  const totalItemCart = cartItems.reduce((acc, item) => {
    acc = acc + item.price * item.quantity;
    return acc;
  }, 0);
  const totalCart = formatMoney(totalItemCart + DELIVERY_PRICE);
  const deliveryPriceFormatted = formatMoney(DELIVERY_PRICE);
  const totalItemCartFormatted = formatMoney(totalItemCart);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(deliveryFormSchema) });

  const onSubmitDelivery: SubmitHandler<deliveryFormSchemaType> = (data) => {
    const address: AddressType = { ...data}
    const formattedData : SalesOrderType = {
      cartItems,
      address,
      paymentMethod: paymentMethod,
    }
    finishOrder(formattedData);
    navigate("/success");
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmitDelivery)}
        className="flex gap-8 my-10 flex-wrap"
      >
        <div className="w-full lg:max-w-[640px] flex flex-col gap-3">
          <h4>Complete seu pedido</h4>
          <div className="bg-gray-200 p-10 rounded-md">
            <header className="flex gap-2 items-start text-yellow-700 mb-8">
              <MapPinLine width={22} height={22} />
              <div>
                <h2 className="text-stone-600 font-sans text-base leading-5 font-normal">
                  Endereço de Entrega
                </h2>
                <p className="text-stone-500 font-normal text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </header>
            <div className="flex flex-col gap-4">
              <div className="max-w-[200px]">
                <input
                  className="w-full p-3 rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                  type="text"
                  placeholder="CEP"
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <span className="text-red-500 text-xs">
                    {errors.zipCode?.message}
                  </span>
                )}
              </div>
              <div>
                <input
                  className="w-full p-3 rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                  type="text"
                  placeholder="Rua"
                  {...register("street")}
                />
                {errors.street && (
                  <span className="text-red-500 text-xs">
                    {errors.street?.message}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <input
                    className="w-full max-w-[200px] p-3 rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                    type="text"
                    placeholder="Número"
                    {...register("number")}
                  />
                  {errors.number && (
                    <span className="text-red-500 text-xs">
                      {errors.number?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <input
                    className="w-full p-3 rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                    type="text"
                    placeholder="Complemento"
                    {...register("complement")}
                  />
                  {errors.complement && (
                    <span className="text-red-500 text-xs">
                      {errors.complement?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <input
                    className="w-full max-w-[200px] p-3 rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                    type="text"
                    placeholder="Bairro"
                    {...register("neighborhood")}
                  />
                  {errors.neighborhood && (
                    <span className="text-red-500 text-xs">
                      {errors.neighborhood?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <input
                    className="w-full p-3 rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                    type="text"
                    placeholder="Cidade"
                    {...register("city")}
                  />
                  {errors.city && (
                    <span className="text-red-500 text-xs">
                      {errors.city?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    className="w-full p-3 max-w-[80px] rounded bg-gray-300 placeholder:text-stone-400 outline-yellow-700 text-sm text-stone-500"
                    type="text"
                    placeholder="UF"
                    {...register("uf")}
                  />
                  {errors.uf && (
                    <span className="text-red-500 text-xs">
                      {errors.uf?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-10 rounded-md">
            <header className="flex gap-2 items-start text-purple-500 mb-8">
              <CurrencyDollar width={22} height={22} />
              <div>
                <h2 className="text-stone-600 font-sans text-base leading-5 font-normal">
                  Pagamento
                </h2>
                <p className="text-stone-500 font-normal text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <div className="flex gap-3 md:flex-nowrap flex-wrap">
              <ToggleButton
                id="credit"
                type="Pagamento Cartão de Crédito"
                value="credit"
                checked={paymentMethod === "credit"}
                name="paymentMethod"
                onChange={(event) =>
                  setPaymentMethod(event.target.value as "credit")
                }
              >
                <CreditCard
                  className="text-purple-500"
                  width={16}
                  height={16}
                />{" "}
                Cartão de Crédito
              </ToggleButton>
              <ToggleButton
                id="debit"
                type="Pagamento Cartão de Débito"
                value="debit"
                checked={paymentMethod === "debit"}
                name="paymentMethod"
                onChange={(event) =>
                  setPaymentMethod(event.target.value as "debit")
                }
              >
                <Bank className="text-purple-500" width={16} height={16} />{" "}
                Cartão de Débito
              </ToggleButton>
              <ToggleButton
                id="money"
                type="Pagamento Dinheiro"
                value="money"
                checked={paymentMethod === "money"}
                name="paymentMethod"
                onChange={(event) =>
                  setPaymentMethod(event.target.value as "money")
                }
              >
                <Money className="text-purple-500" width={16} height={16} />{" "}
                Dinheiro
              </ToggleButton>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-full gap-3 flex flex-col">
          <h4>Cafés selecionados</h4>
          <div className="bg-gray-200 p-10 rounded-md rounded-tr-[44px] rounded-bl-[44px]">
            {cartItems.length > 0 &&
              cartItems.map((cartItem) => (
                <ItemCart
                  key={cartItem.id}
                  id={cartItem.id}
                  name={cartItem.name}
                  image={cartItem.img}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                />
              ))}

            <footer className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-stone-500 text-sm">
                <div className="flex items-center justify-between">
                  <div>Total de itens</div>
                  <div className="text-base">{totalItemCartFormatted}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Entrega</div>
                  <div className="text-base">{deliveryPriceFormatted}</div>
                </div>
                <div className="flex items-center justify-between font-bold text-xl">
                  <div>Total</div>
                  <div>{totalCart}</div>
                </div>
              </div>
              <button
                disabled={cartQuantity <= 0 || isSubmitting}
                type="submit"
                className="uppercase text-white rounded bg-yellow-500 py-3 hover:bg-yellow-700 transition-colors disabled:bg-yellow-400 disabled:cursor-not-allowed"
              >
                Confirmar pedido
              </button>
            </footer>
          </div>
        </div>
      </form>
    </main>
  );
}
