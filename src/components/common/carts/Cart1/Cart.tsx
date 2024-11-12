import React from 'react'
import style from './style.module.css'
import i18next from 'i18next'
import { Myfav } from '../../headers/Tooltips'
import { setBasket } from '@util/setBasket.js'
import { Palette, ShoppingCart } from 'lucide-react'
import { setFavorite } from '@util/setfavorite'
import { Carttype } from '@types/eCommerceTypes'
const { cart, img, text, info, price, icon } = style
function Cart({
  backgroundImage = '/src/assets/setimg.png',
  Text = 'enter text text texttext  text texttext  text texttext  text texttext text texttext  text texttext text texttext  text texttext text texttext  text texttext',
  Price = 350,
  CurrencyType = "EGP"
}
  : Carttype) {
  return (
    <div className={cart} >
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className={img}>
        <span onClick={() => setFavorite()} className='absolute left-1 top-1'><Myfav /></span>
      </div>
      <p className={text}>
        {Text}
      </p>
      <div className={info}>
        <span>
          <span>{Price}</span>
          <span className={price}>{CurrencyType}</span>
        </span>
        <button onClick={() => setBasket()} className={icon}>
          <ShoppingCart color='var(--hoverA)' size={22} />
        </button>
        <button className={icon}>
          <Palette color='var(--hoverA)' />
        </button>
      </div>
    </div>
  )
}

export default Cart
