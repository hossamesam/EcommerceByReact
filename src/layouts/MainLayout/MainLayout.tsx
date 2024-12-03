import { Suspense, useEffect } from 'react'
import { Header5 } from '@components/common/headers';

import { Outlet } from 'react-router-dom';
import '../../i18n';
import i18next from 'i18next';
import Footer from '@components/common/Footer/Footer';
import { useAppDispatch } from 'src/redux/hooks';
import { actSetTheme } from 'src/redux/theme/themeSlice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@redux/store';
export default function MainLayout() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        localStorage.getItem("theme") == "custom" && dispatch(actSetTheme({ theme: "custom" }))
        localStorage.getItem("theme") == "dark" && document.querySelector("body")?.setAttribute("Data-theme", "dark")

    }, [])
    return (
        <div dir={i18next.dir()} >

            <Header5 />
            <PersistGate loading={null} persistor={persistor}>

                <Suspense fallback="loading" >
                    <Outlet />
                </Suspense>
            </PersistGate>

            <Footer />

            {/* <button onClick={() => {
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
            <div id='gg' className='w-24 h-24 bg-blue-500'></div> */}
            {/* <SearchForMobile />
            <ScrollPort1 /> */}
        </div >
    )
}
function customFn(e) {
    const color = e.target.value

    document.getElementById("gg").style.backgroundColor = color
    document.querySelector(`[Data-theme="custom"]`).style.setProperty('--header', color)
}