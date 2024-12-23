import { createSlice } from '@reduxjs/toolkit'
import { TCategories, TLoading } from '@typesTs/eCommerceTypes';
import actAuthRegister from './act/actAuthRegister';
import actAuthRegisterByGoogle from './act/actAuthRegisterByGoogle';


interface IFormState {
    user?: {
        id: string,
        email: string,
    } | null;
    token: string | null,
    loading: TLoading
    error: string | null;
}
const initialState: IFormState = {
    user: null,
    token: null,
    loading: 'idle',
    error: null,
}



export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actAuthRegister.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
        builder
            .addCase(actAuthRegister.fulfilled, (state, action) => {
                state.loading = "succeeded";

                state.token = action.payload

            })
        builder
            .addCase(actAuthRegister.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload === "string") {
                    state.error = action.payload;
                }
            })

        builder
            .addCase(actAuthRegisterByGoogle.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
        builder
            .addCase(actAuthRegisterByGoogle.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.token = action.payload;
                console.log('====================================');
                console.log(action.payload);
                console.log('====================================');
            })
        builder
            .addCase(actAuthRegisterByGoogle.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload === "string") {
                    state.error = action.payload;
                }
            })

    }
})

// Action creators are generated for each case reducer function
export { actAuthRegister, actAuthRegisterByGoogle }
// export const { actGetCategories } = categoriesSlice.actions

export default authSlice.reducer