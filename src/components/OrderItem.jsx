import classes from './OrderItem.module.css'
import cakeThumbnail from '/image-cake-thumbnail.jpg'
function OrderItem({ productName, price, totalPrice, thumbnail, quantity }) {
    return (
        <li className={classes.orderItem}>
            <div className={classes.leftSide}>
                <img src={thumbnail} alt={`${productName} image`} />
                <div>
                    <p className={classes.name}>{productName}</p>
                    <p><span className={classes.quantity}>{quantity}x</span> <span className={classes.price}>@ ${price}.00</span></p>
                </div>
            </div>
            <p className={classes.totalPrice}>${totalPrice}.00</p>
        </li>
    )
}

export default OrderItem
