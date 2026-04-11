import classes from './App.module.css'
import Cart from './components/Cart'
import { useState } from 'react'
import CartContext from './context/CartContext'
import ProductList from './components/ProductList'
import Checkout from './components/Checkout'

function App() {
  const [cart, setCart] = useState([])
  const [placeOrder, setPlaceOrder] = useState(false)
  return (
    <CartContext.Provider value={{ cart, setCart, placeOrder, setPlaceOrder }} >

      <main className={classes.main}>
        <div>
          <Checkout />
          <ProductList />
        </div>
        <Cart />
      </main>
    </CartContext.Provider >
  )
}

export default App
