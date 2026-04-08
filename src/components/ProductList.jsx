import classes from './ProductList.module.css'
import ProductCard from './ProductCard'
import data from '../data.json'
import { nanoid } from 'nanoid'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'

function ProductList() {
    const state = useContext(CartContext)

    const [products] = useState(data.map(item => ({
        ...item, id: nanoid()
    })))

    const handleClick = (id) => {
        const product = products.find(product => {
            return product.id === id
        })

        state.setCart([...state.cart, { product, quantity: 1 }])
    }
    return (
        <>
            <h1>Deserts</h1>
            <ul className={classes.productList}>
                {products.map((product, index, arr) => {
                    const cartItem = state.cart.find(item => item.product.id === product.id)
                    // const quantity = cartItem?.quantity ?? 0
                    const quantity = cartItem ? cartItem.quantity : 0

                    return <ProductCard
                        key={product.id}
                        inCart={state.cart.some(el => el.product.id === product.id)}
                        quantity={quantity}
                        id={product.id}
                        dkImage={product.image.desktop}
                        mobileImage={product.image.mobile}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        onProductClick={() => handleClick(product.id)}
                    />
                })}
            </ul>
        </>
    )
}

export default ProductList
