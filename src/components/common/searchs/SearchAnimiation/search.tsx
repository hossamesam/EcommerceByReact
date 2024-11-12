import React from 'react'
import styles from './style.module.css'
const { input, form, label, caret } = styles
export default function SearchAnimiation() {
    return (
        <form className={form}>
            <label className={label} htmlFor="search">Search</label>
            <input className={input} id="search" type="search" pattern=".*\S.*" required />
            <span className={caret}></span>

        </form>
    )
}
