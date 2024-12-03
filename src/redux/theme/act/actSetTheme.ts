import { createAsyncThunk } from '@reduxjs/toolkit';


const actSetTheme = createAsyncThunk('theme/actSetTheme', async ({ VariableColors, theme = undefined }: { VariableColors?: any, theme?: "custom" | "dark" | "light" | undefined }, thunkAPI) => {

    try {
        console.log("theme: ", theme);
        theme == "custom" && localStorage.setItem("theme", "custom");

        if (localStorage.getItem("theme") == "custom" || theme == "custom") {
            document.querySelector("body")?.setAttribute("Data-theme", "custom")
            if (VariableColors) {
                localStorage.setItem('design', JSON.stringify(VariableColors));
                const customThemeElement = document.querySelector(`[Data-theme="custom"]`);
                if (customThemeElement) {
                    const stylesheet = document.styleSheets[0];
                    // stylesheet.insertRule(`:root {[Data-theme="custom"]: ${VariableColors}; }`);
                    Object.keys(VariableColors).map((e) => customThemeElement.style.setProperty(`--${e}`, VariableColors[e]))
                }

            }
            else if (!VariableColors) {
                const varColor = JSON.parse(localStorage.getItem("design"))

                const customThemeElement = document.querySelector(`[Data-theme="custom"]`);
                if (customThemeElement) {
                    const stylesheet = document.styleSheets[0];
                    // stylesheet.insertRule(`:root {[Data-theme="custom"]: ${VariableColors}; }`);
                    Object.keys(varColor as any).map((e) => customThemeElement.style.setProperty(`--${e}`, varColor[e]))

                }
            }
            localStorage.setItem("theme", "custom")
        }


        if (theme == "dark") {
            document.querySelector("body")?.setAttribute("Data-theme", "light")
            return localStorage.setItem("theme", "light")
        }
        if (theme == "light") {
            document.querySelector("body")?.setAttribute("Data-theme", "dark")
            return localStorage.setItem("theme", "dark")
        }

        if (localStorage.getItem("theme") == null) {
            localStorage.setItem("theme", "dark")
            document.querySelector("body")?.setAttribute("Data-theme", "dark")
        }
        // return ({ theme: localStorage.getItem("theme") })
    } catch (error) {
        localStorage.setItem("theme", "light")
    }
    return localStorage.getItem("theme")
})
export default actSetTheme

