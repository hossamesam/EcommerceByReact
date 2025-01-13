import { RootState } from '@redux/store';
import { createAsyncThunk, createSelector } from '@reduxjs/toolkit';

type IRGB = "/^#([0-9a-f]{3}|[0-9a-f]{6})$/i"
type IthemeStatecustom = { "header": IRGB, "textHeader": IRGB, "bg": IRGB, "textColor": IRGB } | ("dark" | "light")

const actSetTheme2 = createAsyncThunk('theme/actSetTheme2', async (custom?: IthemeStatecustom, thunkAPI) => {

    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { theme } = getState() as RootState



    if (!!custom) {

        return custom
    }
    else {
        if (theme.theme === "light" || custom === "dark") {
            return "dark"

        }
        else if (theme.theme === "dark" || custom === "light") {
            return "light"

        }
        else return "light"
    }



})




export default actSetTheme2
