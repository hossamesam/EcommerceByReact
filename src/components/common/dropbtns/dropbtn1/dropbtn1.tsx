import React, { useEffect } from 'react'
import style from "./dropbtn.module.css";
import { Globe } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import { Flag_Egypt, Flag_Australia, Flag_Germany } from '@assets/Flags.jsx';
const { dropbtn, dropup, dropup_content } = style
function Dropbtn1({ t }: any) {
    useEffect(() => {
        document.getElementById(i18next.language)?.setAttribute("disabled", "true")
    }, [])
    
    return (
        <div className={dropup}>
            <button className={dropbtn} type="button" >
                <span><Globe size={28} /></span>
                {/* <span>	&nbsp;</span> */}
                {t("Header.lng")}

            </button>
            <div id="myDropdown" className={dropup_content}>
                <button id='ar' className='w-full flex justify-between items-between ' type="button" onClick={() => changeLanguageFn("ar")}>
                    العربية
                    <span><Flag_Egypt /></span>
                </button>
                <button id='en' className='w-full flex justify-between items-between' type="button" onClick={() => changeLanguageFn("en")}>
                    <span> english</span>
                    <span><Flag_Australia /></span>
                </button>
                <button id='gr' className='w-full flex justify-between items-between' type="button" onClick={() => changeLanguageFn("gr")}>
                    <span> Germany</span>
                    <span><Flag_Germany /></span>
                </button>

            </div>
        </div>
    )
}
export default withTranslation()(Dropbtn1);

function changeLanguageFn(lang: any) {
    changeLanguage(lang)
    document.querySelector(`#myDropdown`)?.querySelectorAll(`button`).forEach((item: any) => {
        if (item == document.getElementById(lang)) {
            item.setAttribute("disabled", "true")
        }
        else {
            item.removeAttribute("disabled")
        }
    })
}