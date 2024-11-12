import React from 'react'
import i18next from 'i18next'
import style from "./style.module.css"
const { figure, p, product_description, product, info, colors, size, h1, product_sidebar, buy, price, color, black, white, red } = style
function Cart2() {
  return (
    <main id='main' role="main">
      <div className={product}>
        <figure className={figure}>
          <img src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg" alt="Product Image" className="product-image" />
        </figure>
        <div className={product_description}>
          <div className={info}>
            <h1 className={h1}>LOREM IPSUM</h1>
            <p className={p}>
              Lorem Ipsum is simply dummy
            </p>
          </div>
          <div className={price}>
            89
          </div>
        </div>
        <div className={product_sidebar}>
          <button className={buy}>
            <span>BUY ITEM</span>
          </button>
          <button className={info}>
            <span>MORE INFO</span>
          </button>
          <button className={size}>
            <span>SIZES</span>
          </button>
          <button className={colors}>
            <span>
              <a href='/#' className={color + " " + black} />
              <a href='/#' className={color + " " + white} />
              <a href='/#' className={color + " " + red} />
              <a href='/#' className={color + " " + white} />
              <a href='/#' className={color + " " + red} />
            </span>
          </button>
        </div>
      </div>
    </main>

  )
}

export default Cart2
