import React from 'react'
import './styles.css'
import i18next from 'i18next';

export function Menu() {
    return (
        <>
            <label id="burger" className="burger " form='burger'>
                <input id="main" onClick={() => openNav()} type="checkbox" name="burger" />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div dir={i18next.dir()} id="mySidenav" className="sidenav">
                <div>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <div onClick={() => check()} id="xx" className='w-full bg-emerald-400/50 '></div>

            </div>

        </>
    )
}
function openNav() {
    if (document.getElementById("mySidenav").style.width !== "100%") {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("main").style.marginRight = "100%";
        document.getElementById("burger").style.zIndex = 200;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("burger").style.zIndex = 1;
        document.getElementById("burger").style.position = "relative";

    }
}
function check() {
    document.getElementById("main")?.click();

}