import { useEffect } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { actGetProductsShoppingCart, addToCart, decreaseCart, deleteFromCart } from '@redux/cart/cartSlice';
import { withTranslation } from 'react-i18next';
import { LoadingPage } from '@components/common/loading';
import CartShopUI from '@components/eCommerce/CartShopUI';
import CartShopTotalPrice from '@components/eCommerce/CartShopUI/CartShopTotalPrice';

function CartShop({ t }: any) {



    return (

        <section className="pb-24 ltr relative border-2 bg-[var(--bgCart)] rounded-2xl w-4/6 max-lg:w-full mx-auto my-10">
            <h1 className="pt-8  font-bold text-4xl leading-10 mb-8 text-center text-black">
                {t("ShoppingCart.title")}
            </h1>
            <CartShopUI />
        </section>

    )
}

export default withTranslation()(CartShop)