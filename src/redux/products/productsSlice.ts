import { createSlice } from '@reduxjs/toolkit'
import { TLoading, TProduct } from '@typesTs/eCommerceTypes';
import actGetProducts from './act/actGetProducts';
import actGetProductsByid from './act/actGetProductsByid';


interface ICategoriesState {
    Data: TProduct[]
    DataOfItem: TProduct[]
    PaginationCount: number
    loading: TLoading;
    error: string | null;
}
const initialState: ICategoriesState = {
    Data: [],
    DataOfItem: [],
    PaginationCount: 0,
    loading: 'idle',
    error: 'null',
}



export const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(actGetProducts.pending, (state) => {
                    state.loading = "pending";
                    state.error = null;
                })
            builder
                .addCase(actGetProducts.fulfilled, (state, action) => {

                    state.loading = "succeeded";
                    state.Data = action.payload.data
                    state.PaginationCount = action.payload.Pagination

                })
            builder
                .addCase(actGetProducts.rejected, (state, action) => {
                    state.loading = "failed";
                    if (action.payload && typeof action.payload === "string") {
                        state.error = action.payload;
                    }
                })
            ////////
            builder
                .addCase(actGetProductsByid.pending, (state) => {
                    state.error = null;
                })
            builder
                .addCase(actGetProductsByid.fulfilled, (state, action) => {
                    state.DataOfItem = (action.payload)
                })

        }

})

// Action creators are generated for each case reducer function
export { actGetProducts, actGetProductsByid }
// export const { actGetCategories } = categoriesSlice.actions

export default productsSlice.reducer