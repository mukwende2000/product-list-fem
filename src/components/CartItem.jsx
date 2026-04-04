import classes from './CartItem.module.css'

function CartItem({ productName, quantity, price, totalPrice }) {
    return (
        <li>
            <span>{productName}</span>
            <p>
                <span>{quantity}x</span>
                <span>@ ${price}</span>
                <span>@ ${totalPrice}</span>
            </p>
        </li>
    )
}

export default CartItem
