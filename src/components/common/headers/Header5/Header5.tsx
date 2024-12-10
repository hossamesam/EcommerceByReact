import React, { useEffect, useState } from 'react'
import { Menu } from '../../svg/Menu/Menu'
import { CircleUserRound, Globe, Home, ShoppingCart } from 'lucide-react';
import { SearchForDesktop, SearchForMobile } from '@components/common/searchs';
import { withTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import { withNamespaces } from 'react-i18next';

import { SwitchLanguage } from '@util/getLanguage';
import { Link } from 'react-router-dom';
import Dropbtn1 from '@components/common/dropbtns/dropbtn1/dropbtn1';

import style from "./style.module.css";
import { useAppSelector } from '@redux/hooks';
import { totalBaskets } from '@redux/cart/cartSlice';
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
const { search, header, logo, nav, ul, li, pop, basketNumber } = style

function Header5({ t }: any) {


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
                        <Dropbtn1 />
                    </li>
                    {/* <li className={li}>
                            <button type="button" onClick={() => changeLanguage(SwitchLanguage())}>
                                <span><Globe size={28} /></span>
                                {t("Header.lng")}
                            </button>
                        </li> */}
                    <li className={li}>
                        <Link to="/register" >
                            <span><CircleUserRound size={28} /></span>
                            {t("Header.register")}

                        </Link >
                    </li>
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

      export default withTranslation()(Header5);