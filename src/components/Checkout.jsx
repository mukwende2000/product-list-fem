import { useContext, useEffect, useRef } from 'react'
import classes from './Checkout.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import checkmark from '../assets/images/icon-order-confirmed.svg'
import OrderItem from './OrderItem'
import CartContext from '../context/CartContext'

function Checkout() {
    const dialogRef = useRef()
    const state = useContext(CartContext)

    useEffect(() => {
        dialogRef.current.showModal()
    })

    const cartItems = state.cart
    console.log(cartItems)
    return (
        // <div className={classes.modal}>
        // </div>

        <dialog className={classes.modal} ref={dialogRef}>
            <img src={checkmark} alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food</p>
            <ul>
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </ul>
            <button>Start New Order</button>

        </dialog>
    )
}

export default Checkout
