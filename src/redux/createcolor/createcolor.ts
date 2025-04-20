import { createSlice } from "@reduxjs/toolkit";
import actcreatecolorSlice from "./act/actcreatecolorSlice";

interface IcreateItemSlice {
    statusCreate: "idle" | "failed" | "pending" | "succeeded"
    statusMassage: any
}
const initialState: IcreateItemSlice = {
    statusCreate: "idle",
    statusMassage: "",

}

export const createItemSlice = createSlice({
    name: 'createcolor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actcreatecolorSlice.fulfilled, (state, action) => {
            state.statusCreate = "succeeded";
            state.statusMassage = action.payload
        })
        builder.addCase(actcreatecolorSlice.rejected, (state) => {
            state.statusCreate = "failed";
        })
        builder.addCase(actcreatecolorSlice.pending, (state) => {
            state.statusCreate = "idle";
        })
    },
})
export { actcreatecolorSlice }
export default createItemSlice.reducer
