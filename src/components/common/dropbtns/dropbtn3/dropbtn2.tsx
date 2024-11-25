import React from 'react'
import style from "./dropbtn.module.css";
const { dropbtn, dropup, dropup_content } = style
export default function Dropbtn2() {
    return (
        <div className={dropup}>
            <button className={dropbtn}>Dropup</button>
            <div className={dropup_content}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}
