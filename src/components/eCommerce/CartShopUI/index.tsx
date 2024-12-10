import { LoadingPage } from '@components/common/loading';
import { actGetProductsShoppingCart, addToCart, decreaseCart, deleteFromCart } from '@redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { Minus, Plus, Trash2 } from 'lucide-react';
import React, { useEffect } from 'react'
import CartShopTotalPrice from './CartShopTotalPrice';

function CartShopUI() {
    const { items, productFullInfo, loading } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(actGetProductsShoppingCart())
        console.log("test");
    }, [])

    return (
        <LoadingPage status={loading} >
            <div className=" w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                {productFullInfo.map((data) => {
                    if (Object.keys(items).find(e => e == data.id)) {
                        return (
                            <div key={data.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-[550px]:gap-6   border-t border-gray-200 py-6">
                                <div className="flex  flex-col gap-3 min-[550px]:gap-6 w-full max-xl:justify-center   max-xl:mx-auto">
                                    <div className="flex gap-4     max-w-[600px] min-h-[200px] max-h-[600px] ">
                                        <img
                                            src={`${import.meta.env.VITE_BaseUrl}/api/attachments/public/${data.attachments[0].guid}`}
                                            alt="perfume bottle image"
                                            className=" rounded-xl object-fill w-[200px] h-[200px] self-start"
                                        />
                                        <div className="flex gap-4  flex-col ">
                                            <h5 className="flex font-semibold  leading-8  w-[200px] text-black line-clamp-2 text-ellipsis">
                                                {data.nameAr}
                                            </h5>
                                            <h6 className="font-manrope  font-bold  leading-9 text-black text-nowrap  max-w-[176px]">
                                                ${data.sellPrice}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=" grid-cols-3  items-center my-4  justify-center   flex max-sm:flex-row w-full   ">

                                    <div className="   contents   ">
                                        <button value={"plus"} onClick={() => dispatch(addToCart((data.id)))}
                                            className=" bg-[#aacaf6] min-h-12 max-h-24 rtl:rounded-r-full ltr:rounded-l-full px-2 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                            <Plus />
                                        </button>
                                        <input
                                            id='count'
                                            type="text"
                                            className=" bg-[#aacaf6] min-h-12 max-h-24 min-w-12 max-w-24 text-gray-900 font-semibold text-lg   placeholder:text-gray-900  text-center "
                                            // value={items[data.id]}
                                            placeholder={String(items[Number(data.id)])}
                                            disabled={true}
                                        ></input>
                                        <button
                                            value={"minus"}
                                            onClick={() => dispatch(decreaseCart((data.id)))} className=" bg-[#aacaf6] min-h-12 max-h-24 rtl:rounded-l-full  ltr:rounded-r-full px-2   flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                            <Minus />
                                        </button>
                                    </div>
                                    <h6 className="text-red-400 font-manrope font-bold  leading-9 w-full max-w-[176px] text-center">
                                        ${data.sellPrice * items[Number(data.id)]}
                                    </h6>
                                    <button
                                        value={"delet"}
                                        onClick={() => dispatch(deleteFromCart((data.id)))}
                                        // onClick={e => Changecount(e.currentTarget.value, index, count)}
                                        className=' p-2  flex items-center justify-center bg-red-500 rounded-full'
                                    >
                                        <Trash2 color='#f4f4f4' />
                                    </button>
                                </div>
                                
                            </div >
                        )
                    }
                })
                }
                <CartShopTotalPrice />
            </div>
        </LoadingPage>

    )
}



export default CartShopUI