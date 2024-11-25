import { createSlice } from '@reduxjs/toolkit'
import actSetTheme from './act/actSetTheme'

interface ICategoriesState {
    theme: 'light' | 'dark' | 'custom'
}
const initialState: ICategoriesState = {
    theme: 'light',
}



export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // custom: state => {
        //     state.theme = 'custom'
        //     document.querySelector("body")?.setAttribute("Data-theme", state.theme)
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(actSetTheme.fulfilled, (state, action) => {
            state.theme = action.payload
        })
    }
})

export { actSetTheme }
export default themeSlice.reducer