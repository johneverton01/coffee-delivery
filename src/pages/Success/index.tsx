import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import motoboy from '../../assets/motoboy.svg'
import { Icon } from '../../components/Icon'
import { useCart } from '../../hooks/useCart'

export function Success() {
  const { salesOrder } = useCart()
  const { address, paymentMethod } = salesOrder
  let paymentMethodText = ''
  switch (paymentMethod) {
    case 'credit':
      paymentMethodText = 'Creditão de Crédito'
      break;
    case 'debit':
      paymentMethodText = 'Creditão de Débito'
      break;
    case 'money':
    default:
      paymentMethodText = 'Dinehiro'
      break;
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mt-20 items-end gap-28">
      <div className="flex flex-col gap-10">
        <div> 
          <h1 className="font-extrabold text-3xl text-yellow-700">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-xl">Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="p-[1px] bg-gradient-to-r from-yellow-700 to-purple-500 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-cover">
        <div className="p-10 flex flex-col gap-8 bg-white rounded-tr-[36px] rounded-bl-[36px] rounded-md w-full h-full bg-cover">
          <div className="flex">
            <Icon 
            iconBackground='purple'
          >
            <MapPin weight='fill'/>
          </Icon>
            <div className="flex-wrap w-full max-w-[310px]">
              Entrega em <span className="font-bold">{`${address.street}, ${address.number}`}</span>{`${address.neighborhood} - ${address.city}, ${address.uf}`}
            </div>    
          </div>
          <div className="flex">
            <Icon 
            iconBackground='yellow'
          >
            <Timer weight='fill'/>
          </Icon> 
            <div className="flex-wrap w-full max-w-[141px]">
              Previsão de entrega <span className="font-bold">20 min - 30 min</span>
            </div>
          </div>
          <div className="flex">
            <Icon 
            iconBackground='orange'
          >
            <CurrencyDollar weight='fill'/>
          </Icon>
            <div className="flex-wrap w-full max-w-[162px]">
              Pagamento na entrega <span className="font-bold">{paymentMethodText}</span> 
            </div>    
          </div>
        </div>
        </div>
      </div>
      <div>
        <img src={motoboy} alt="" />
      </div>
    </div>
  )
}