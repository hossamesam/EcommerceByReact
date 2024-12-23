import { createAsyncThunk } from "@reduxjs/toolkit";
import { TFormData } from "@typesTs/registerTypes";
import axios from 'axios';
import i18next from "i18next";


const actAuthRegister = createAsyncThunk('Auth/actAuthRegister', async ({ email, firstName, lastName, password, login }: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    firstName = String(firstName.trim()).replace(" ", "_")
    lastName = String(lastName.trim()).replace(" ", "_")
    const users = {
        email,
        firstName,
        lastName,
        login,
        password,
        langKey: i18next.language
    }

    try {
        const result = axios.post(`${import.meta.env.VITE_BaseUrl}/api/register`, users,
            {
                'headers': {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
        )
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
