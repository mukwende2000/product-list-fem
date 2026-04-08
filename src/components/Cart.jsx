import { useContext } from 'react'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../context/CartContext'


function Cart() {
    const state = useContext(CartContext)
    const handleClick = (id) => {
        console.log(id)

        const filterCart = state.cart.filter((item) => item.product.id !== id)
        state.setCart(filterCart)
    }
    return (
        <div className={classes.cart}>
            <h2>Your Cart ({state.cart.length})</h2>
            <ul>
                {
                    state.cart.map((item) => {
                        return <CartItem
                            id={item.product.id}
                            key={item.product.id}
                            productName={item.product.name}
                            quantity={item.quantity}
                            price={item.product.price}
                            totalPrice={item.product.price * item.quantity}
                            onItemClick={() => handleClick(item.product.id)}
                        />
                    })
                }
            </ul>
            <div className={classes.totalOrder}>
                <p>Order Total</p>
                <p>$46.50</p>
            </div>
            <button className={classes.confirmBtn}>
                Confirm Order
            </button>
        </div>
    )
}
export default Cart
