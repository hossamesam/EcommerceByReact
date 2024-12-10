import { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import { TProduct } from '@typesTs/eCommerceTypes'
import totalBaskets, {
    getCartTotalQuantitySelector,
    itemQuantityAvailabilityCheckingSelector
} from './selectors'
import actGetProductsShoppingCart from "./act/actGetProductsShoppingCart";
import { TLoading } from '@typesTs/eCommerceTypes';

interface ICart {
    items: { [key: number]: number }, // id : quantity
    productFullInfo: TProduct[],
    totalBaskets: number,
    loading: TLoading,
    totalPrice: number
}
const initialState: ICart = {
    items: {},
    productFullInfo: [],
    totalBaskets: 0,
    loading: 'idle',
    totalPrice: 0,
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload
            if (state.items[id]) {
                state.items[id]++
            } else {
                state.items[id] = 1
            }
        },
        decreaseCart: (state, action) => {
            const id = action.payload
            if (state.items[id]) {
                state.items[id]--
            }
            if (state.items[id] == 0) {
                if (confirm("are you sure you want to remove this product") === true) {
                    delete state.items[id]
                } else {
                    state.items[id] = 1
                }
            }
        },
        deleteFromCart: (state, action) => {
            const id = action.payload
            if (confirm("are you sure you want to remove this product") === true) {
                delete state.items[id]
            } else {
                state.items[id] = 1
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(actGetProductsShoppingCart.pending, (state) => {
                state.loading = "pending";
            })
        builder
            .addCase(actGetProductsShoppingCart.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.productFullInfo = (action.payload.responseArray)
                state.totalPrice = (action.payload.totalPrice)
                if (action.payload.length == 0) {
                    state.loading = "failed";
                }
            })
    }



})


export {
    totalBaskets,
    getCartTotalQuantitySelector,
    itemQuantityAvailabilityCheckingSelector,
    actGetProductsShoppingCart
}
export const { addToCart, decreaseCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer