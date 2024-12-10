import { actGetProductsShoppingCart } from '@redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next'

function CartShopTotalPrice({ t }: any) {
    const { totalPrice } = useAppSelector((state) => state.cart);

    return (
        <div>
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-full max-lg:mx-auto">
                <div className="flex items-center justify-between w-full mb-6">
                    <p >{t("ShoppingCart.SubTotal")}</p>
                    <h6 className='relative'>
                        <span>360.00</span>
                        <span className='text-[16px] absolute -top-2 -right-6'>Egy</span>
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p>
                        {t("ShoppingCart.DeliveryCharge")}
                    </p>
                    <h6 className='relative'>
                        <span>360.00</span>
                        <span className='text-[16px] absolute -top-2 -right-6'>Egy</span>
                    </h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className=" font-semibold text-2xl">
                        {t("ShoppingCart.Total")}
                    </p>
                    <h6 className="relative font-semibold text-2xl">
                        {totalPrice.toFixed(2)}
                        <span className='text-[16px] absolute -top-2 -right-6'>Egy</span>
                    </h6>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button className="rounded-xl py-2    flex items-center bg-green-300 justify-center transition-all duration-500 hover:bg-green-400">
                    <span className="px-2 font-semibold text-lg leading-8 ">
                        {t("ShoppingCart.ContinuetoPayment")}
                    </span>

                </button>
                <button className="rounded-xl  py-2 px-2  justify-center items-center bg-yellow-500 font-semibold text-lg flex transition-all duration-500 hover:bg-yellow-600">

                    {t("ShoppingCart.AddCouponCode")}

                </button>
            </div>
        </div>
    )
}

export default withTranslation()(CartShopTotalPrice)