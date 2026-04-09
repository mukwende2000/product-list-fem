import classes from './OrderItem.module.css'
import cakeThumbnail from '/image-cake-thumbnail.jpg'
function OrderItem() {
    return (
        <li className={classes.orderItem}>
            <div className={classes.leftSide}>
                <img src={cakeThumbnail} alt="" />
                <div>
                    <p className={classes.name}>Classic Tiramisu</p>
                    <p><span className={classes.quantity}>1x</span> <span className={classes.price}>@ $5.50</span></p>
                </div>
            </div>
            <p className={classes.totalPrice}>$5.50</p>
        </li>
    )
}

export default OrderItem
