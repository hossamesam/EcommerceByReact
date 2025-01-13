import { createSlice } from '@reduxjs/toolkit'
import { TColors, TPolicies, Tsize } from '@typesTs/eCommerceTypes';
import actGetcolors from './act/actGetcolors';
import actGetsize from './act/actGetsize';
import actGetPolicie from './act/actGetpolice';


interface IFormState {
    colors: TColors[];
    size: Tsize[]
    Policie: TPolicies[]
}
const initialState: IFormState = {
    colors: [],
    size: [],
    Policie: [],
}



export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actGetcolors.fulfilled, (state, action) => {
                state.colors = action.payload;
            })
        builder
            .addCase(actGetcolors.rejected, (state) => {
                state.colors = [];
            })
        builder
            .addCase(actGetcolors.pending, (state) => {
                state.colors = []
            })

        builder
            .addCase(actGetsize.fulfilled, (state, action) => {
                state.size = action.payload;
            })
        builder
            .addCase(actGetsize.rejected, (state) => {
                state.size = [];
            })
        builder
            .addCase(actGetsize.pending, (state) => {
                state.size = []
            })

        builder
            .addCase(actGetPolicie.fulfilled, (state, action) => {
                state.Policie = action.payload;
            })
        builder
            .addCase(actGetPolicie.rejected, (state) => {
                state.Policie = [];
            })
        builder
            .addCase(actGetPolicie.pending, (state) => {
                state.Policie = []
            })

    }

})

export { actGetcolors, actGetsize, actGetPolicie }
export default filterSlice.reducer