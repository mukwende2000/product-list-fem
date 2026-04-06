import addToCartBtn from './../assets/images/icon-add-to-cart.svg'
import classes from './ProductCard.module.css'

function ProductCard({ category, name, price, dkImage, mobileImage }) {
    return (
        <div className={classes.productCard}>
            <picture>
                <source media='(min-width: 1440px)' srcSet={dkImage} />
                <img src={mobileImage} alt='waffles' />
            </picture>

            <button className={classes.cartBtn}>
                <img src={addToCartBtn} alt="shopping cart image" />
                <span>Add to Cart</span>
            </button>

            <p className={classes.category}>{category}</p>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>{price}</p>
        </div>
    )
}

export default ProductCard
