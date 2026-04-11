import { useContext, useEffect, useRef } from 'react'
import classes from './Checkout.module.css'
import checkmark from '../assets/images/icon-order-confirmed.svg'
import OrderItem from './OrderItem'
import CartContext from '../context/CartContext'

function Checkout() {
    const dialogRef = useRef()
    const state = useContext(CartContext)

    useEffect(() => {
        state.placeOrder ? dialogRef.current.showModal() : dialogRef.current.close()
    }, [state.placeOrder])

    return (
        <dialog className={classes.modal} ref={dialogRef}>
            <img src={checkmark} alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food</p>
            <ul> {
                state.cart.map((cartItem) => {
                    const item = cartItem.product
                    return <OrderItem
                        productName={item.name}
                        price={item.price}
                        quantity={cartItem.quantity}
                        totalPrice={item.price * cartItem.quantity}
                        thumbnail={item.image.thumbnail}
                    />

                })}
            </ul>
            <button>Start New Order</button>
        </dialog>

    )
}

export default Checkout
