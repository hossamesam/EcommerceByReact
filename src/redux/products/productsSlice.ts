import { createSlice } from '@reduxjs/toolkit'
import { TLoading, TProduct } from '@types/eCommerceTypes';
import actGetProducts from './act/actGetProducts';


interface ICategoriesState {
    Data: TProduct[]
    PaginationCount: number
    loading: TLoading;
    error: string | null;
}
const initialState: ICategoriesState = {
    Data: [],
    PaginationCount: 0,
    loading: 'idle',
    error: 'null',
}



export const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
    }
})

// Action creators are generated for each case reducer function
export { actGetProducts }
// export const { actGetCategories } = categoriesSlice.actions

export default productsSlice.reducer