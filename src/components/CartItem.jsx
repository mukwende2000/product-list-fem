import { FaTimes } from 'react-icons/fa'
import classes from './CartItem.module.css'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

function CartItem({ productName, quantity, price, totalPrice, onItemClick }) {
    const state = useContext(CartContext)

    return (
        <li className={classes.cartItem}>
            <div>

                <span className={classes.productName}>{productName}</span>
                <p>
                    <span className={classes.quantity}>{quantity}x</span>
                    <span className={classes.price}> @ ${price}</span>
                    <span className={classes.totalPrice}> ${totalPrice}</span>
                </p>
            </div>
            <button onClick={onItemClick} className={classes.delBtn}>
                <FaTimes />
            </button>
        </li>
    )
}

export default CartItem
