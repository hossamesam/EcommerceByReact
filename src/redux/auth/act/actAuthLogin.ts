import { createAsyncThunk } from '@reduxjs/toolkit'
import { TCategories, TgetAllItemstype } from '@typesTs/eCommerceTypes';
import axios from 'axios';


const actGetCategories = createAsyncThunk('categories/actGetCategories', async ({ page, sizeItems }: TgetAllItemstype, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get<TCategories>(`${import.meta.env.VITE_BaseUrl}/api/categories`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }

})
export default actGetCategories

