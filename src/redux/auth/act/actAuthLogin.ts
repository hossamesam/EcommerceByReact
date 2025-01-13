import { createAsyncThunk } from '@reduxjs/toolkit'
import { TFormDataLogin } from '@typesTs/logInTypes';
import axios from 'axios';


const actAuthLogin = createAsyncThunk('Auth/actAuthLogin ', async ({ email, password, rememberMe }: TFormDataLogin, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const login = {
        "username": email,
        "password": password,
        "rememberMe": rememberMe,
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_BaseUrl}/api/authenticate`, login);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }

})
export default actAuthLogin

