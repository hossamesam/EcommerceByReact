import { createSlice } from '@reduxjs/toolkit'
import actSetTheme from './act/actSetTheme'
import actSetTheme2 from './act/actSetTheme2'
import { IRGB } from '@typesTs/eCommerceTypes'

interface IthemeState {
    theme: 'light' | 'dark' | { "custom": { "header": IRGB, "textHeader": IRGB, "bg": IRGB, "textColor": IRGB } }
}
const initialState: IthemeState = {
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
    extraReducers:
        (builder) => {

            builder.addCase(actSetTheme2.fulfilled, (state, action) => {
                state.theme = action.payload

                if (!!state.theme && state.theme !== "dark" && state.theme !== "light") {
                    document.querySelector("body")?.setAttribute("Data-theme", "custom")
                    Object.keys(state.theme).map((e) => document.querySelector(`[Data-theme="custom"]`).style.setProperty(`--${e}`, state.theme[e]))
                }
                else document.querySelector("body")?.setAttribute("Data-theme", action.payload)

            })
            builder.addCase(actSetTheme2.rejected, (state, action) => {
                state.theme = 'light'
                document.querySelector("body")?.setAttribute("Data-theme", 'light')

            })

        }
})

export { actSetTheme, actSetTheme2 }
export default themeSlice.reducer