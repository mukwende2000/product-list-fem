import classes from './App.module.css'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'
import Cart from './components/Cart'

function App() {

  return (
    <main className={classes.main}>
      <div>
        <h1>Deserts</h1>
        <ul className={classes.productList}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </div>
      <Cart />
    </main>
  )
}

export default App
