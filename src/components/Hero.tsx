import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Coffe from '../assets/coffe.png'
import { Icon } from './Icon'

export function Hero() {
  return (
    <div className="flex lg:flex-row flex-col justify-between md:py-24 py-12 md-gap-0 gap-10">
      <div>
        <div className="flex flex-col gap-4 max-w-[588px]">
          <h1 className="font-cursive font-bold text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="font-sans">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
        </div>
        <div className="grid md:grid-rows-2 grid-cols-1 md:grid-flow-col gap-5 mt-16">
          <Icon 
            description='Compra simples e segura'
            iconBackground='orange'
          >
            <ShoppingCart weight='fill'/>
          </Icon>    
          <Icon 
            description='Entrega rápida e rastreada'
            iconBackground='yellow'
          >
            <Timer weight='fill'/>
          </Icon>    
          <Icon 
            description='Embalagem mantém o café intacto'
            iconBackground='gray'
          >
            <Package weight='fill'/>
          </Icon> 
          <Icon 
            description='O café chega fresquinho até você'
            iconBackground='purple'
          >
            <Coffee weight='fill'/>
          </Icon>    
        </div>
      </div>
      <img src={Coffe} alt="" />
    </div>
  )
}