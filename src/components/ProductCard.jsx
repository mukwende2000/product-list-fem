import addToCartBtn from './../assets/images/icon-add-to-cart.svg'
import classes from './ProductCard.module.css'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

function ProductCard({ category, name, price, dkImage, mobileImage, onProductClick, inCart, quantity }) {
    const state = useContext(CartContext)
    // console.log(inCart)

    return (
        <div className={classes.productCard}>
            <picture>
                <source media='(min-width: 1440px)' srcSet={dkImage} />
                <img src={mobileImage} alt='waffles' />
            </picture>

            {inCart ? <div className={classes.incrementBtn}>
                <button>+</button>
                <span>{quantity}</span>
                <button>-</button>
            </div> :

                <button onClick={onProductClick} className={classes.cartBtn}>
                    <img src={addToCartBtn} alt="shopping cart image" />
                    <span>Add to Cart</span>
                </button>
            }

            <p className={classes.category}>{category}</p>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>{price}</p>
        </div>
    )
}

export default ProductCard
