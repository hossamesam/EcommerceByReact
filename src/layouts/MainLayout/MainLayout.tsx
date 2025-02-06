import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { HeaderMain } from '@components/common/headers';
import '../../i18n';
import i18next from 'i18next';
import Footer from '@components/common/Footer/Footer';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { actSetTheme } from 'src/redux/theme/themeSlice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@redux/store';
import { Toaster } from 'sonner';
import { Loading } from '@components/feedback';
import { LoadingInfo } from '@components/common/loading';

export default function MainLayout() {


    const { theme } = useAppSelector(state => state.theme)

    useEffect(() => {
        if (theme == "light") {
            document.querySelector("body")?.setAttribute("Data-theme", "light")
        }
        else if (theme == "dark") {
            document.querySelector("body")?.setAttribute("Data-theme", "dark")
        }
        else {
            document.querySelector("body")?.setAttribute("Data-theme", "custom")
            Object.keys(theme).map((e) => document.querySelector(`[Data-theme="custom"]`).style.setProperty(`--${e}`, theme[e]))
        }
    }, [theme])

    return (
        <div dir={i18next.dir()} >
            <HeaderMain />
            {/* <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<LoadingInfo status="idle" />} >
                    <Outlet />
                </Suspense>
            </PersistGate> */}


        </div >
    )
}
