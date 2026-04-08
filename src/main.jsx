import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContext from './context/CartContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext.Provider value={{ cart: [] }}>
      <App />
    </CartContext.Provider >
  </StrictMode>,
)
