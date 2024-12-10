import { RootState } from '@redux/store';
import { createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const actGetProductsShoppingCart = createAsyncThunk('cart/actGetProductsShoppingCart', async (_, thunkAPI) => {

    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState
    const itemsID = Object.keys(cart.items)
    let totalPrice = 0
    const responseArray = []

    if (!itemsID) {
        return fulfillWithValue([])
    }
    for (let i = 0; i < itemsID.length; i++) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BaseUrl}/api/items/${itemsID[i]}`)
            responseArray.push(response.data)
            totalPrice += cart.items[response.data.id] * Number(response.data.sellPrice)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("An unexpected error");
            }
        }
    }
    return { responseArray, totalPrice }


})




export default actGetProductsShoppingCart
