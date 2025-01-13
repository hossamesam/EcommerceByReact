import { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPolicies } from "@typesTs/eCommerceTypes";
import axios from 'axios';


const actGetPolicie = createAsyncThunk('filter/actGetPolicie', async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const { authSlice } = getState() as RootState

    try {

        const request: TPolicies[] = (await axios.get(`${import.meta.env.VITE_BaseUrl}/api/policies`,
            {
                "headers": {
                    "Authorization": `Bearer ${authSlice.accessToken}`,
                    'Content-Type': `multipart/form-data `,
                }
            }
        )).data

        return request
    }
    catch (error) {
        return error
    }

})

export default actGetPolicie
