import React, { Suspense } from 'react'
import { Header1, Header2, Header3, Header4, Header5 } from '@components/common/headers';
import { SearchForDesktop, SearchForMobile } from '@components/common/searchs';
import { ScrollPort1 } from '@components/common/scrollport';
import { Otp } from '@components/common/otp';
import { Slider1 } from '@components/common/sliders';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import i18next from 'i18next';
import style from './styles.module.css';
import Dropbtn from '@components/common/dropbtns/dropbtn1/dropbtn1';
const { body } = style
export default function MainLayout() {

    return (
        <div dir={i18next.dir()} className={body + ' h-[200vh]'}>
            <Header5 />
            <Suspense fallback="loading" >
                <Outlet />
            </Suspense>
            <button onClick={() => {
                console.log('====================================');
                console.log(document.body);
                console.log('====================================');
                document.body.removeAttribute("Data-theme")
                document.body.setAttribute("Data-theme", "light")
            }} >
                light
            </button>
            <br />
            <button onClick={() => document.querySelector("body")?.setAttribute("Data-theme", "dark")}>
                dark
            </button>
            <br />
            <button onClick={() => document.querySelector("body")?.setAttribute("Data-theme", "custom")}>
                custom
            </button>
            <input onChange={(e) => customFn(e)} type="color" id='colors' />
            <div id='gg' className='w-24 h-24 bg-blue-500'></div>
            {/* <SearchForMobile />
            <ScrollPort1 /> */}
        </div >
    )
}
function customFn(e) {
    const color = e.target.value
    console.log('====================================');
    console.log(document.querySelector(`[Data-theme= "custom"]`));
    console.log('====================================');
    document.getElementById("gg").style.backgroundColor = color
    document.querySelector(`[Data-theme="custom"]`).style.setProperty('--header', color)
}