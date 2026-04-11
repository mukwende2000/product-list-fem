import { useContext } from 'react'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../context/CartContext'
import illustrationEmptyCart from '../assets/images/illustration-empty-cart.svg'


function Cart() {
    const state = useContext(CartContext)

    const handleClick = (id) => {
        const filterCart = state.cart.filter((item) => item.product.id !== id)
        state.setCart(filterCart)
    }

    const totalOrder = () => {
        const totalOrder = state.cart.reduce((sum, item) => {
            return sum + item.product.price * item.quantity
        }, 0)

        return totalOrder
    }

    const handleConfirmOrder = () => {
        state.setPlaceOrder((prev) => !prev)
    }

    return (
        <div className={classes.cart}>
            <h2>Your Cart ({state.cart.length})</h2>
            {state.cart.length ?
                < ul >
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
                </ul> :
                <img src={illustrationEmptyCart} alt="empty cart illustration" />
            }
            {state.cart.length ?
                <><div className={classes.totalOrder}>
                    <p>Order Total</p>
                    <p>${totalOrder()}.00</p>
                </div>
                    <button onClick={handleConfirmOrder} className={classes.confirmBtn}>
                        Confirm Order
                    </button>
                </> :
                <p className={classes.emptyCartText}>Your added items will appear here</p>
            }
        </div >
    )
}
export default Cart
