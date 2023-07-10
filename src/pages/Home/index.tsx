import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { CoffeeCard, ICoffeeCard } from "../../components/CoffeeCard";
import { Hero } from "../../components/Hero";

export function Home() {
  const [coffees, setCoffees] = useState<ICoffeeCard[]>([])

  const getCoffeesDate = async () => {
    const { data } = (await api.get('coffees'))
    setCoffees(data.coffees)
  };

  useEffect(() => {
    getCoffeesDate()
  }, [])

  return (
    <>
      <Hero />
      <main className="py-8">
        <div className="flex justify-between items-center">
          <h2 className="font-extrabold text-3xl">Nossos Cafés</h2>
          <div className="flex gap-2">
            <button 
              className="uppercase rounded-full border-2 border-yellow-700 text-yellow-700 py-[6px] px-3 font-bold text-xs"
            >
              Tradicional
            </button>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-6">
          {
            coffees.map(coffee => {
              return (
                <CoffeeCard 
                key={coffee.id} 
                name={coffee.name}
                price={coffee.price}
                description={coffee.description}
                img={coffee.img}
                id={coffee.id}
                tags={coffee.tags}
              />  
              )
            })
          }
          
        </div>
      </main>
    </>
  )
}