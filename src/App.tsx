import { useState } from "react"
import Header from "./components/Header"
import ListingBody from "./components/ListingBody"
import { ContextCartCount } from "./utils/context-cart"
import { ProductDTO } from "./models/product";
import * as productService from './services/product-service'


function App() {

  const [productsList] = useState<ProductDTO[]>(productService.products);

  const [contextCartCount, setContextCartCount] = useState<number>(productsList.length)
  
  return (
    <>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }} >
        <Header />
        <ListingBody />
      </ContextCartCount.Provider>
    </>
  )
}

export default App
