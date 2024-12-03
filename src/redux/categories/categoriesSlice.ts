import { createSlice } from '@reduxjs/toolkit'
import { TCategories, TLoading } from '@typesTs/eCommerceTypes';
import actGetCategories from './act/actGetCategories';


interface ICategoriesState {
    Data: TCategories[]
    loading: TLoading
    error: string | null;
}
const initialState: ICategoriesState = {
    Data: [],
    loading: 'idle',
    error: null,
}



export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actGetCategories.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
        builder
            .addCase(actGetCategories.fulfilled, (state, action) => {

                state.loading = "succeeded";
                state.Data = action.payload
            })
        builder
            .addCase(actGetCategories.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload === "string") {
                    state.error = action.payload;
                }
            })
    }
})

// Action creators are generated for each case reducer function
export { actGetCategories }
// export const { actGetCategories } = categoriesSlice.actions

export default categoriesSlice.reducer