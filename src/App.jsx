import classes from './App.module.css'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'

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
      <div>
        <h2>Your Cart (7)</h2>
        <ul>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div>
    </main>
  )
}

export default App
