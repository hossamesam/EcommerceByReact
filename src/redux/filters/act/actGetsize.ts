import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tsize } from "@typesTs/eCommerceTypes";
import axios from 'axios';


const actGetsize = createAsyncThunk('filter/actGetsize', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const request: Tsize = (await axios.post(`${import.meta.env.VITE_BaseUrl}/api/item-sizes/search`, {})).data

        return request
    }
    catch (error) {
        return error
    }

})

export default actGetsize
