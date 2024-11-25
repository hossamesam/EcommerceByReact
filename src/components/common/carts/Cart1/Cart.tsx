import React from 'react'
import i18next from 'i18next'
import { Myfav } from '../../headers/Tooltips'
import { setBasket } from '@util/setBasket.js'
import { Palette, ShoppingCart } from 'lucide-react'
import { setFavorite } from '@util/setfavorite'
import { TCart } from '@types/eCommerceTypes'
import style from './style.module.css'
const { cart, img, text, info, price, icon, Sdescription } = style
function Cart({
  backgroundImage = '/src/assets/setimg.png',
  Text = 'enter text text texttext  text texttext  text texttext  text texttext text texttext  text texttext text texttext  text texttext text texttext  text texttext',
  Price = 350,
  CurrencyType = "EGP",
  description = "description"
}: TCart) {
  return (
    <div className={cart} >
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className={img}>
        <span onClick={() => setFavorite()} className='absolute left-1 top-1'><Myfav /></span>
      </div>
      <div className="min-h-[140px] ">
        <p className={text}>
          {Text}
        </p>
        <p className={Sdescription}>
          {description}
        </p>
      </div>
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
