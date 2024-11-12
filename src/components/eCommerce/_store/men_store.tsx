import Cart from '@components/common/carts/Cart1/Cart'
import Cart2 from '@components/common/carts/Cart2/Cart'
import { getAllItems } from '@util/apis/getAllItems';
import React from 'react'

export default function Men_store() {
  const Data: Items[] = getAllItems(20, 0)

  return (
    <div>
      {Data.map((item) => {
        return <Cart backgroundImage='/src/assets/setimg.png' Price={item.sellPrice} Text={item.nameAr} CurrencyType='EGP' />
      })}
      <Cart />
    </div>
  )
}
