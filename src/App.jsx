import classes from './App.module.css'
import Cart from './components/Cart'
import { useState } from 'react'
import CartContext from './context/CartContext'
import ProductList from './components/ProductList'
import Checkout from './components/Checkout'

function App() {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{ cart, setCart }} >

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
