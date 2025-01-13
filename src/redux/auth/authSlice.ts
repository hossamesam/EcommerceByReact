import { createSlice } from '@reduxjs/toolkit'
import { TCategories, TLoading } from '@typesTs/eCommerceTypes';
import actAuthRegister from './act/actAuthRegister';
import actAuthRegisterByGoogle from './act/actAuthRegisterByGoogle';
import actAuthLogin from './act/actAuthLogin';


interface IFormState {
    user?: {
        id: string,
        email: string,
    } | null;
    accessToken: string | null,
    loading: TLoading
    error: string | null;
}
const initialState: IFormState = {
    user: null,
    accessToken: null,
    loading: 'idle',
    error: null,
}



export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        restAuth(state) {
            state.user = null;
            state.accessToken = null;
            state.loading = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(actAuthRegister.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
        builder
            .addCase(actAuthRegister.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.accessToken = action.payload
            })
        builder
            .addCase(actAuthRegister.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload === "string") {
                    state.error = action.payload;
                }
            })

        ///////////////////////////////////////////////////////////////
        builder
            .addCase(actAuthRegisterByGoogle.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
        builder
            .addCase(actAuthRegisterByGoogle.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.accessToken = action.payload;
            })
        builder
            .addCase(actAuthRegisterByGoogle.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload === "string") {
                    state.error = action.payload;
                }
            })
        ///////////////////////////////////////////////////////////////
        builder
            .addCase(actAuthLogin.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
        builder
            .addCase(actAuthLogin.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.accessToken = action.payload.id_token;
            })
        builder
            .addCase(actAuthLogin.rejected, (state, action) => {
                state.loading = "failed";
                if (action.payload && typeof action.payload === "string") {
                    state.error = action.payload;
                }
            })
    }
})

// Action creators are generated for each case reducer function
export { actAuthRegister, actAuthRegisterByGoogle, actAuthLogin }
// export const { actGetCategories } = categoriesSlice.actions

export const { restAuth } = authSlice.actions;

export default authSlice.reducer