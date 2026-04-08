import classes from './App.module.css'
import Cart from './components/Cart'
import { useState } from 'react'
import CartContext from './context/CartContext'
import ProductList from './components/ProductList'

function App() {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{ cart, setCart }} >

      <main className={classes.main}>
        <div>
          <ProductList />
        </div>
        <Cart />
      </main>
    </CartContext.Provider >
  )
}

export default App
