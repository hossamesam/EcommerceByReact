import { createSlice } from "@reduxjs/toolkit";
import actpostItemSlice from "./act/actpostItemSlice";
interface IcreateItemSlice {
    statusCreate: "idle" | "failed" | "pending" | "succeeded"
    statusMassage: any
}
const initialState: IcreateItemSlice = {
    statusCreate: "idle",
    statusMassage: "",

}

export const createItemSlice = createSlice({
    name: 'createItem',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actpostItemSlice.fulfilled, (state, action) => {
            state.statusCreate = "succeeded";
            state.statusMassage = action.payload
        })
        builder.addCase(actpostItemSlice.rejected, (state) => {
            state.statusCreate = "failed";
        })
        builder.addCase(actpostItemSlice.pending, (state) => {
            state.statusCreate = "idle";
        })
    },
})
export {actpostItemSlice}
export default createItemSlice.reducer
