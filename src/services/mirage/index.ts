import {
  createServer,
  Model,
  ActiveModelSerializer,
} from "miragejs"
 
import { coffees, coffeesTypes } from "./coffees"


type CoffeType = {
  id: string
  name: string
  created_at: string
}

type Coffee = {
  id: string
  name: string
  description: string
  img: string
  price: number
  created_at: Date
}

type Order = {
  items: [coffeeId: string, coffeAmount: number]
  deliveryPrice: number
  total: number
  created_at: string
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      coffee: Model.extend<Partial<Coffee>>({}),
      coffeeType: Model.extend<Partial<CoffeType>>({}),
      order: Model.extend<Partial<Order>>({}),
    },

    seeds(server) {
      server.create("coffee",coffees[0])      
      server.create("coffee",coffees[1])      
      server.create("coffee",coffees[2])      
      server.create("coffee",coffees[3])      
      server.create("coffee",coffees[4])      
      server.create("coffee",coffees[5])      
      server.create("coffee",coffees[6])      
      server.create("coffee",coffees[7])      
      server.create("coffee",coffees[8])      
      server.create("coffee",coffees[9])      
      server.create("coffee",coffees[10])      
      server.create("coffee",coffees[11])      
      server.create("coffee",coffees[12])      
      server.create("coffee",coffees[13])      
      server.create("coffeeType", coffeesTypes[0])
      server.create("coffeeType", coffeesTypes[1])
      server.create("coffeeType", coffeesTypes[2])
      server.create("coffeeType", coffeesTypes[3])
      server.create("coffeeType", coffeesTypes[4])
    },

    routes() {
      this.urlPrefix = "http://localhost:3000"
      this.namespace = "api"
      this.timing = 750

      this.get("/coffees")
      this.get("/coffees-types")
      this.get("/coffee/:id")
      this.get("/order/id")
      this.post("/order")

      this.namespace = ""
      this.passthrough()
    },
  })
  server.logging = true;
  return server;
}
