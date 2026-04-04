import waffle from './../assets/images/image-waffle-mobile.jpg'
import waffleTab from './../assets/images/image-waffle-tablet.jpg'
import waffleDesktop from './../assets/images/image-waffle-desktop.jpg'
import addToCartBtn from './../assets/images/icon-add-to-cart.svg'

import classes from './ProductCard.module.css'

function ProductCard() {
    return (
        <div className={classes.productCard}>
            <picture>
                <source media='(min-width: 1440px)' srcSet={waffleDesktop} />
                <img src={waffle} alt='waffles' />
            </picture>

            <button className={classes.cartBtn}>
                <img src={addToCartBtn} alt="shopping cart image" />
                <span>Add to Cart</span>
            </button>

            <p className={classes.generalProductName}>Waffle</p>
            <p className={classes.specificProductName}>Waffle with Berries</p>
            <p className={classes.productPrice}>$6.50</p>
        </div>
    )
}

export default ProductCard
