import { useState } from "react"
import Header from "./components/Header"
import ListingBody from "./components/ListingBody"
import { ContextCartCount } from "./utils/context-cart"

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0)
  
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
