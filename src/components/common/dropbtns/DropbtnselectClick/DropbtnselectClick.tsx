import React, { useState } from 'react'
import style from "./DropbtnselectClick.module.css"
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const { navbar, dropdown, dropdown_content, dropbtn, IconStyle, selectStyle } = style


function DropbtnselectClick({ className }: any) {
    return (
        <div className={className}>
            <select  className={selectStyle} name="" id="">
                <option value="">
                    <label className="container">One
                        <input type="checkbox" checked={true} />
                        <span className="checkmark"></span>
                    </label>
                </option>
                <option value="">sssssssssssss</option>
                <option value="">wwwwwwwwwwwww</option>
            </select>
        </ div>
    )
}


export default DropbtnselectClick