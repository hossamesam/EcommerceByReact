import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const actAuthRegister = createAsyncThunk('Auth/createAsyncThunk', async (data: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const result = axios.post(`${import.meta.env.VITE_BaseUrl}/api/authenticate/google`, data)

        return result

    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }


})

export default actAuthRegister
