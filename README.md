# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d]
- Live Site URL: [https://product-list-fem.vercel.app/]
## My process

### Built with

- CSS modules for styling
- CSS Grid
- Context API for state management
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I had a fun time building this, especially after being away from code for a long time, a lot of things to recall and get stuck on.

My most important lesson was the state management with the built in context API, i went for this because i learnt that using an external library like Redux or Zustand on such a small project would be over kill, additionally i just wanted to recap on the API and the useContext hook.

I got stuck at one point when trying to query an item from the cart and use it's quantity property to display how many of it is in the cart, but it wasn't displaying on the UI yet logging it to the console would show it, stayed on it for some minutes until i got to understand it had to do with react's rendering process, so even if the console was showing the item, yet for that particular, it was not yet available, so i had to ultilize the tenary operator to check if it is available.

```jsx
<ul className={classes.productList}>
                {products.map((product, index, arr) => {
                    const cartItem = state.cart.find(item => item.product.id === product.id)

                    return <ProductCard
                        key={product.id}
                        inCart={state.cart.some(el => el.product.id === product.id)}
                        quantity={cartItem ? cartItem.quantity : 0}
                        id={product.id}
                        dkImage={product.image.desktop}
                        mobileImage={product.image.mobile}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        onProductClick={() => handleClick(product.id)}
                        onIncreaseBtnClick={() => handleIncrement(product.id)}
                        onDecreaseBtnClick={() => handleDecrement(product.id)}
                    />
                })}
            </ul>
```

## Author

- Website - [https://www.mukwende.vercel.app]
- Frontend Mentor - [https://www.frontendmentor.io/profile/mukwende2000]
- Twitter - [https://www.frontendmentor.io/profile/mukwende2000)]
