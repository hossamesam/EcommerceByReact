import React, { useEffect, useState } from 'react'
import i18next from 'i18next'
import { Myfav } from '../../headers/Tooltips'
import { setBasket } from '@util/setBasket.js'
import { Palette, ShoppingCart } from 'lucide-react'
import { setFavorite } from '@util/setfavorite'
import { TCart } from '@typesTs/eCommerceTypes'
import style from './style.module.css'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { addToCart } from '@redux/cart/cartSlice'
import { useSelector } from 'react-redux'
import { Sucess } from '@components/common/loading'
const { cart, img, text, info, price, icon, Sdescription } = style
function Cart({
  backgroundImage = '/src/assets/setimg.png',
  Text = 'enter text text texttext  text texttext  text texttext  text texttext text texttext  text texttext text texttext  text texttext text texttext  text texttext',
  Price = 350,
  CurrencyType = "EGP",
  description = "description",
  id
}: TCart) {
  const dispatch = useAppDispatch()

  const totalBaskets = useAppSelector(state => state.cart.totalBaskets)

  const [isBtnDisabled, setIsBtnDisabled] = useState(false)


  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    const debound = setTimeout(() => {
      setIsBtnDisabled(false)
    }, 2500);
    return () => clearTimeout(debound)

  }, [isBtnDisabled])



  const setBasketFromRedux = () => {
    dispatch(addToCart(id))
    setIsBtnDisabled(true)
  }

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
        <button disabled={isBtnDisabled} onClick={setBasketFromRedux} className={icon}>
          {/* onClick={setBasket()} */}
          <ShoppingCart color='var(--hoverA)' size={22} />
        </button>
        <button className={icon}>
          <Palette color='var(--hoverA)' />
        </button>
      </div>
      <div hidden={!isBtnDisabled}>
        <Sucess />
      </div>

    </div>
  )
}

export default Cart
