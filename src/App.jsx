import classes from './App.module.css'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import data from './data.json'

function App() {

  return (
    <main className={classes.main}>
      <div>
        <h1>Deserts</h1>
        <ul className={classes.productList}>
          {data.map((product) => {
            return <ProductCard
              dkImage={product.image.desktop}
              mobileImage={product.image.mobile}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          })}
        </ul>
      </div>
      <Cart />
    </main>
  )
}

export default App
