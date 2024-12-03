import { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'
import { TProduct } from '@types/eCommerceTypes'
import totalBaskets, {
    getCartTotalQuantitySelector,
    itemQuantityAvailabilityCheckingSelector
} from './selectors'


interface ICart {
    items: { [key: number]: number }, // id : quantity
    productFullInfo: TProduct[],
    totalBaskets: number,
}
const initialState: ICart = {
    items: {},
    productFullInfo: [],
    totalBaskets: 0
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

        }
    },



})


export {
    totalBaskets,
    getCartTotalQuantitySelector,
    itemQuantityAvailabilityCheckingSelector
}
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer