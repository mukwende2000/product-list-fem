import classes from './Cart.module.css'
import CartItem from './CartItem'


function Cart() {
    return (
        <div className={classes.cart}>
            <h2>Your Cart (7)</h2>
            <ul>
                <CartItem productName='Classic Tiramisu' quantity='1' price='5.50' totalPrice='5.50' />
                <CartItem productName='Vanilla Bean Creme Brulee' quantity='4' price='7.00' totalPrice='28.00' />
                <CartItem productName='Vanilla Panna Cotta' quantity='2' price='6.50' totalPrice='13.00' />
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
