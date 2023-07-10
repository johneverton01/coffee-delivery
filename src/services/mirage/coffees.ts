import { v4 as uuidv4 } from 'uuid'

import expresso from '../../assets/expresso.svg'
import expressoAmericano from '../../assets/americano.svg'
import expressoCremoso from '../../assets/expresso-cremoso.svg'
import expressoGelado from '../../assets/cafe-gelado.svg'
import cafeComLeite from '../../assets/cafe-com-leite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolateQuente from '../../assets/chocolate-quente.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

export const coffees = [
  {
    id: uuidv4(),
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    img: expresso,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    img: expressoAmericano,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    img: expressoCremoso,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    img: expressoGelado,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    img: cafeComLeite,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    img: latte,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    img: capuccino,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    img: macchiato,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    img: mocaccino,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    img: chocolateQuente,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    img: cubano,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    img: havaiano,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    img: arabe,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    img: irlandes,
    type: "",
    price: 9.90,
    created_at: new Date(),
  },
]

export const coffeesTypes = [
  {
    id: "1",
    name: "Tradicional",
    created_at: new Date(),
  },
  {
    id: "2",
    name: "Especial",
    created_at: new Date(),
  },
  {
    id: "3",
    name: "Com leite",
    created_at: new Date(),
  },
  {
    id: "4",
    name: "Alcoólico",
    created_at: new Date(),
  },
  {
    id: "5",
    name: "gelado",
    created_at: new Date(),
  },
]