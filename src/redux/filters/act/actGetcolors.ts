import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const actGetcolors = createAsyncThunk('filter/actGetcolors', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const request = await axios.get(`${import.meta.env.VITE_BaseUrl}/api/colors`)
        return request.data

    } catch (error) {
        return error
    }


})

export default actGetcolors
