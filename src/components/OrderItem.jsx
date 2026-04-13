import classes from './OrderItem.module.css'

function OrderItem({ productName, price, totalPrice, thumbnail, quantity }) {
    return (
        <li className={classes.orderItem}>
            <div className={classes.leftSide}>
                <img src={thumbnail} alt={`${productName} image`} />
                <div>
                    <p className={classes.name}>{productName}</p>
                    <p><span className={classes.quantity}>{quantity}x</span> <span className={classes.price}>@ ${price}</span></p>
                </div>
            </div>
            <p className={classes.totalPrice}>${totalPrice}</p>
        </li>
    )
}

export default OrderItem
