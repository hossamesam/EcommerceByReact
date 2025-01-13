import { useEffect, useState } from 'react'
import { Menu } from '../../Menu/menu/Menu'
import { LogOut, ShoppingCart } from 'lucide-react';
import { SearchForDesktop } from '@components/common/searchs';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { totalBaskets } from '@redux/cart/cartSlice';

import { DropbtnLanguage, DropbtnRegister } from '@components/common/dropbtns';
import { restAuth } from '@redux/auth/authSlice';
import BtnLogout from '@components/common/dropbtns/BtnLogout/BtnLogout';
const { search, header, logo, nav, ul, li, pop, basketNumber } = style

function HeaderMain({ t }: any) {

    const dispatch = useAppDispatch()
    const itemsCartBasket = useAppSelector(totalBaskets)
    const [btnclicked, setBtnclicked] = useState(false)


    useEffect(() => {
        if (!itemsCartBasket) {
            return;
        }

        setBtnclicked(true)

        const debound = setTimeout(() => {
            setBtnclicked(false)
        }, 300);

        () => clearTimeout(debound)

    }, [itemsCartBasket])

    return (
        <header className={header} dir={i18next.dir()}>

            <div className={logo}>
                <a href="/">
                    {t("TitleLogo")}
                </a>
            </div>
            <div className={search}>
                <SearchForDesktop widthSerch='100%' />
            </div>

            <nav className={nav}>
                <ul className={ul}>

                    <li className={li}>
                        <DropbtnLanguage />
                    </li>

                    <li className={li}>
                        <DropbtnRegister />
                    </li>

                    <li className={li}>
                        <BtnLogout />
                    </li>

                    {/* <li className={li}>
                        <Link to="/" onClick={() => { dispatch(restAuth()) }} >
                            <span className='relative'>
                                <LogOut size={28} />
                            </span>
                            {t("Header.logout")}
                        </Link >
                    </li> */}


                    <li className={li}>
                        <Link to="/CartShop" >
                            <span className='relative'>
                                <span className={`${btnclicked && pop} ${basketNumber}`}>{itemsCartBasket}</span>
                                <ShoppingCart size={28} />
                            </span>
                            {t("Header.cart")}
                        </Link >
                    </li>
                    <li>
                        <Menu /></li>
                </ul>
            </nav>

        </header>
    )
}

export default withTranslation()(HeaderMain);