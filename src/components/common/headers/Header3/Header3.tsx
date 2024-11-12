import React from 'react'
import "./style.css";
import { ArchiveRestore, LucideHome, MessageSquareTextIcon, Presentation, Users } from 'lucide-react';
export default function Header3() {


    return (
        <>
            <div className="header" dir='ltr'>
                <div className="header__logo ">
                    <strong className="text-[25px] ">Eommerce</strong>
                </div>
                <nav className="navbar">
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><LucideHome /><span>Home</span> </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><MessageSquareTextIcon /><span>Messages</span></a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><Users /><span>Customers</span></a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><Presentation /><span>Projects</span></a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><ArchiveRestore /><span>Resources</span></a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><ArchiveRestore /><span>Help</span></a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link"><ArchiveRestore /><span>Settings</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
