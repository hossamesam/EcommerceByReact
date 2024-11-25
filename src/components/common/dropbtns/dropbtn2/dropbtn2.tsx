import React, { createRef, forwardRef } from 'react'
import style from "./dropbtn.module.css";
const { dropbtn, dropup, dropup_content } = style

const Dropbtn2 = forwardRef(function Dropbtn2(_, ref: any) {
    const fontFamiles = ["Marhey", "cairo", "Lalezar", "Inter", "system", "Avenir", "Helvetica", "Arial", "sans-serif"]
    function ChngeDesign(e: any) {
        document.documentElement.style.setProperty('--fontClone', e.target.value)
        ref.current = e.target.value

    }

    return (
        <div className={dropup}>
            <button className={dropbtn}>Dropup</button>
            <div className={dropup_content}>
                {fontFamiles.map((e) => <button onClick={(e) => ChngeDesign(e)} value={e}>{e}</button>)}
            </div>
        </div>
    )
})

export default Dropbtn2