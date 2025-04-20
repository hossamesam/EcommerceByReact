import { createSlice } from "@reduxjs/toolkit";
import actcreatepolicySlice from "./act/actcreatepolicySlice";

interface IcreateItemSlice {
    statusCreate: "idle" | "failed" | "pending" | "succeeded"
    statusMassage: any
}
const initialState: IcreateItemSlice = {
    statusCreate: "idle",
    statusMassage: "",

}

export const createItemSlice = createSlice({
    name: 'createpolicy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actcreatepolicySlice.fulfilled, (state, action) => {
            state.statusCreate = "succeeded";
            state.statusMassage = action.payload
        })
        builder.addCase(actcreatepolicySlice.rejected, (state) => {
            state.statusCreate = "failed";
        })
        builder.addCase(actcreatepolicySlice.pending, (state) => {
            state.statusCreate = "idle";
        })
    },
})
export { actcreatepolicySlice }
export default createItemSlice.reducer
