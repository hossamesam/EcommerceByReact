import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct, getAllItemstype } from '@typesTs/eCommerceTypes';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const actGetProducts = createAsyncThunk('Products/actGetProducts', async ({ page, sizeItems }: getAllItemstype, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get<TProduct>(`${import.meta.env.VITE_BaseUrl}/api/items?page=${page}&size=${sizeItems}`);

        const Pagination = Math.ceil(response.headers.get("x-total-count") / sizeItems) as number

        return ({ data: response.data, Pagination: Pagination })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }

})
export default actGetProducts

