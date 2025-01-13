import React, { useEffect, useState } from 'react'
import { Moon } from 'lucide-react'
import { actSetTheme, actSetTheme2 } from 'src/redux/theme/themeSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import style from './style.module.css'
const { togglecheckbox, toggleslot, togglebutton } = style
function SwitchMode() {
    const dispatch = useAppDispatch()
    const selector = useAppSelector(state => state.theme)
    // useEffect(() => {
    //     document.querySelector("body")?.setAttribute("Data-theme", selector.theme)
    // }, [])

    return (
        <label>
            <input
                // value={themeold}
                checked={selector.theme === "dark" ? true : false}
                onClick={(e) => {
                    // dispatch(actSetTheme({ theme: (e.target as HTMLInputElement).checked === true ? "light" : "dark" }))
                    dispatch(actSetTheme2())
                }}
                className={togglecheckbox} type="checkbox" />
            <div className={toggleslot}>
                <div className={togglebutton} />
            </div>
        </label>

    )
}

export default SwitchMode

