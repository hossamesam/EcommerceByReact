import cartSlice from '@redux/cart/cartSlice';
import { RootState } from '@redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct, TgetAllItemstype } from '@typesTs/eCommerceTypes';
import axios from 'axios';
import { object } from 'zod';

const actGetProductsByid = createAsyncThunk('Products/actGetProductsByid', async (id: number, thunkAPI) => {

    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState
    const itemsID = Object.keys(cart.items)
    if (!itemsID) {
        return fulfillWithValue([])
    }
    const responseArray = []
    for (let i = 0; i < itemsID.length; i++) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BaseUrl}/api/items/${itemsID[i]}`)
            responseArray.push(response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("An unexpected error");
            }
        }

    }

    return responseArray


})
export default actGetProductsByid
