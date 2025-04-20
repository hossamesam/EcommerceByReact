import { RootState } from '@redux/store';
import { createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import {  TcreatecolorsTypes } from '@typesTs/createTypes';
import axios from 'axios';

const actcreatecolorSlice = createAsyncThunk('createcolor/actcreatecolorSlice', async (DataPost: TcreatecolorsTypes, thunkAPI) => {

    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { authSlice } = getState() as RootState


    if (!authSlice.accessToken) {
        return fulfillWithValue([])
    }
    else {

        try {
            const response = await axios
                .post(`${import.meta.env.VITE_BaseUrl}/api/colors`, DataPost, {
                    "headers": {
                        "Authorization": `Bearer ${authSlice.accessToken}`
                    }
                })
            if (response.status === 201) {
                console.log("succeeded");
                return "succeeded"
            }
            else {
                return response;
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("An unexpected error");
            }
        }
    }

})




export default actcreatecolorSlice
