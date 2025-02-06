import React, { JSXElementConstructor, useState } from 'react'
import style from "./DropdownbtnClick.module.css"
import { ArrowDown, ArrowLeft, ArrowRight, ChevronDown, ChevronRight, PanelsLeftBottom, Theater } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const { navbar, dropdown, dropdown_content, dropbtn, IconStyle } = style

type TDropdownbtnClick = {
    children?: React.ReactNode,
    title: any,
    scent_title?: any,
    Icon?: React.ReactNode,
    arrowShow?: boolean,
    Navigate?: string,
}

function DropdownbtnClick({ children, title, scent_title, Icon, Navigate, arrowShow = true }: TDropdownbtnClick) {
    const [arrow, setarrow] = useState(false)
    const Nav = useNavigate()
    return (
        <div className='bg-zinc-800 px-4 '
            onClick={() => !!Navigate && Nav(Navigate)}
        >
            <div data-arrowshow={arrowShow} onClick={() => setarrow(e => !e)} className={dropdown_content} >

                <div className={IconStyle}>
                    {arrow ? <ChevronRight /> : <ChevronDown />}
                </div>

                <div className='flex justify-center items-center gap-2 relative'>
                    <h2 className='flex flex-col justify-end items-end  '>
                        <span>{title}</span>
                    </h2>
                    <div>
                        {Icon}
                    </div>
                </div>

                <span className='absolute text-[14px] bottom-[5px] left-[37px] font-thin   '>{scent_title}</span>
            </div>
            <div
                // id='show'
                data-show={arrow}
                className={navbar}
            // className={(!arrow ? "flex " : "hidden ") + " p-0  " + navbar}
            >
                {children}
            </div>
        </div>
    )
}


export default DropdownbtnClick