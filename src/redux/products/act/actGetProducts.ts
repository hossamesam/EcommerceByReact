import { RootState } from '@redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct, TgetAllItemstype } from '@typesTs/eCommerceTypes';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const actGetProducts = createAsyncThunk('Products/actGetProducts', async ({ page, sizeItems, id }: TgetAllItemstype, thunkAPI) => {
    let quary
    const { getState } = thunkAPI;
    const { Products } = getState() as RootState
     sizeItems = Products.PaginationCountList
    if (id) {
        quary = {
            "category": {
                id: id
            }
        }
    }
    else {
        quary = {}
    }
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.post<TProduct>(`${import.meta.env.VITE_BaseUrl}/api/items/search?page=${page}&size=${sizeItems}&eagerload=true&category=${id}`,
            quary
        );

        const Pagination = Math.ceil(response.headers.get("X-Total-Count") / sizeItems) as number
        return ({ data: response.data, Pagination: Pagination })
    } catch (error) {
        console.log("error: ", error);

        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.message);
        } else {
            return rejectWithValue("An unexpected error");
        }
    }

})
export default actGetProducts

