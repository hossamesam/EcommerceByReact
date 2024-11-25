import React, { useEffect, useState } from 'react'
import { Moon } from 'lucide-react'
import { actSetTheme } from 'src/redux/theme/themeSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import style from './style.module.css'
const { togglecheckbox, toggleslot, togglebutton } = style
function SwitchMode() {
    const dispatch = useAppDispatch()

    return (
        <label >
            <input onClick={(e) => dispatch(actSetTheme({ theme: (e.target as HTMLInputElement).checked ? "light" : "dark" }))} className={togglecheckbox} type="checkbox" />
            <div className={toggleslot}>
                <div className={togglebutton} />
            </div>
        </label>

    )
}

export default SwitchMode
