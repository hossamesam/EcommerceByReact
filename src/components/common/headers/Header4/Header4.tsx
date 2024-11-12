import React from 'react'
import { Menu } from '../../svg/Menu/Menu'
import style from "./style.module.css";
const { header, logo, login, cart, nav, ul, li } = style
import { CircleUserRound, Globe, Home, ShoppingCart } from 'lucide-react';
export default function Header4() {
    return (
        <header className={header}>
            <nav className={nav}>
                <ul className={ul}>
                    <li className={logo}>
                        <a href="#">
                            Ecommerce
                        </a>
                    </li>

                    <div className='w-[1000px] grow max-w-[400px] max-sm:max-w-[300px]'>
                        <li className={li}>
                            <a href="#">
                                <span><Globe size={28} /></span>
                                اللغة
                            </a>
                        </li>
                        <li className={li}>
                            <a href="#">
                                <span><CircleUserRound size={28} /></span>
                                تسجيل
                            </a>
                        </li>
                        <li className={li}>
                            <a href="#">
                                <span><ShoppingCart size={28} /></span>
                                التسوق
                            </a>
                        </li>
                    </div>

                    {/* <li><Menu /></li> */}
                </ul>
            </nav>
        </header>
    )
}
