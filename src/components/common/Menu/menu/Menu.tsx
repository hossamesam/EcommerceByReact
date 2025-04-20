import React from 'react'
import i18next from 'i18next';
import SwitchMode from '@components/common/Menu/switch/SwitchMode';
import { useAppDispatch } from 'src/redux/hooks';
import { actSetTheme, actSetTheme2, themeSlice } from 'src/redux/theme/themeSlice';
import { Link, useNavigate } from 'react-router-dom';
import style from './style.module.css'
import DropdownbtnClick from '@components/common/dropbtns/DropdownbtnClick/DropdownbtnClick';
import { ContactRoundIcon, Diamond, DiamondPlus, LayoutDashboard, List, Package, PanelsLeftBottom, ScrollText, Settings, SwatchBook } from 'lucide-react';

const { burger, sidenav, xx, mySidenav, bgside, childLinks } = style

export function Menu() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <>
            <label id="burger" className={burger} form='burger'>
                <input id="main" onClick={() => openNav()} type="checkbox" name="burger" />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div dir={i18next.dir()} id="mySidenav" className={mySidenav + " " + sidenav}>
                <div className={bgside}>


                    <DropdownbtnClick arrowShow={false} Icon={<ContactRoundIcon size={25} />} title={"profile"} scent_title={""} />
                    <hr />
                    <DropdownbtnClick arrowShow={false} Icon={<LayoutDashboard size={25} />} title={"Dashboard"} Navigate='/DashBoard' />
                    <hr />
                    <DropdownbtnClick Icon={<Settings size={25} />} title={"settings"} >
                        <div className='flex flex-col items-end justify-center border-l-2  border-red-200'>
                            <DropdownbtnClick arrowShow={false} Icon={<SwatchBook size={25} />} title={"Create color"} Navigate='/Createcolor' />
                            <DropdownbtnClick arrowShow={false} Icon={<ScrollText size={25} />} title={"Create policy"} Navigate='/Createpolicy' />
                        </div>
                    </DropdownbtnClick>
                    <hr />
                    <DropdownbtnClick Icon={<Package size={25} />} title={"items"}  >
                        <div className='flex flex-col items-end justify-center border-l-2  border-red-200'>
                            {/* <div className='flex flex-col w-full gap-4 items-end justify-center  mx-4 p-2 border-l-2  border-red-200'> */}
                            <DropdownbtnClick arrowShow={false} Icon={<List size={25} />} title={"Product List"} Navigate='/items/1/0' />
                            <DropdownbtnClick arrowShow={false} Icon={<DiamondPlus size={25} />} title={"Add New Product "} Navigate='/items/CreateProduct' />
                            {/* <Link to="/items/1/0" className={childLinks}>
                                <h3>Product List</h3>
                                <span><List /></span>
                            </Link>
                            <Link to="/items/CreateProduct" className={childLinks}>
                                <h3>Add New Product</h3>
                                <span><DiamondPlus /></span>
                            </Link> */}
                        </div>
                    </DropdownbtnClick>
                    <hr />
                    <DropdownbtnClick
                        title={"Theme Mode"}
                        scent_title={"Choose light or dark mode"}
                        Icon={<PanelsLeftBottom size={25} />}
                    >
                        <div className='flex mt-2 gap-2'>
                            <span
                                className='bg-slate-500 px-2 relative rounded-lg cursor-pointer'
                                onClick={() => navigate("/designsystem")}
                            >
                                <h1 className='w-14 py-2 text-xs '>
                                    create your custom mode
                                </h1>
                            </span>
                            <span
                                onClick={(e) => { dispatch(actSetTheme2("light")) }}
                                className='bg-slate-500 p-2 rounded-lg cursor-pointer' >
                                <svg xmlns="http://www.w3.org/2000/svg" width={58} height={56} viewBox="0 0 87 86" fill="none"><mask id="mask0_111470_19003" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={1} y={1} width={85} height={84}><rect x="1.3335" y={1} width={84} height={84} rx={2} fill="white" /></mask><g mask="url(#mask0_111470_19003)"><rect x="1.3335" y={1} width={84} height={84} rx={2} fill="white" /><rect x="1.3335" y={1} width="86.9647" height={6} fill="#BFBFBF" /><circle cx="4.31006" cy={4} r={1} fill="#FAFAFA" /><circle cx="8.31006" cy={4} r={1} fill="#FAFAFA" /><circle cx="12.3101" cy={4} r={1} fill="#FAFAFA" /></g><path fillRule="evenodd" clipRule="evenodd" d="M26.2046 10C26.2046 9.44772 26.6523 9 27.2046 9H82.5222C83.0745 9 83.5222 9.44772 83.5222 10V15C83.5222 15.5523 83.0745 16 82.5222 16H27.2046C26.6523 16 26.2046 15.5523 26.2046 15V10Z" fill="#D9D9D9" /><path d="M1.3335 7H24.0629V85H3.33349C2.22893 85 1.3335 84.1046 1.3335 83V7Z" fill="#D9D9D9" /><path fillRule="evenodd" clipRule="evenodd" d="M6.8335 16C8.76649 16 10.3335 14.433 10.3335 12.5C10.3335 10.567 8.76649 9 6.8335 9C4.9005 9 3.3335 10.567 3.3335 12.5C3.3335 14.433 4.9005 16 6.8335 16Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M12.3335 11.5C12.3335 10.9477 12.7812 10.5 13.3335 10.5H21.3335C21.8858 10.5 22.3335 10.9477 22.3335 11.5V13.5C22.3335 14.0523 21.8858 14.5 21.3335 14.5H13.3335C12.7812 14.5 12.3335 14.0523 12.3335 13.5V11.5Z" fill="#FAFAFA" /><rect width="18.7294" height={61} transform="matrix(-1 0 0 1 22.063 22)" fill="#D9D9D9" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 23C22.063 22.4477 21.6153 22 21.063 22H4.33358C3.78129 22 3.33358 22.4477 3.33358 23V23C3.33358 23.5523 3.78129 24 4.33358 24H21.063C21.6153 24 22.063 23.5523 22.063 23V23Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 28C22.063 27.4477 21.6153 27 21.063 27H4.33358C3.78129 27 3.33358 27.4477 3.33358 28V28C3.33358 28.5523 3.78129 29 4.33358 29H21.063C21.6153 29 22.063 28.5523 22.063 28V28Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 33C22.063 32.4477 21.6153 32 21.063 32H4.33358C3.78129 32 3.33358 32.4477 3.33358 33V33C3.33358 33.5523 3.78129 34 4.33358 34H21.063C21.6153 34 22.063 33.5523 22.063 33V33Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 38C22.063 37.4477 21.6153 37 21.063 37H4.33358C3.78129 37 3.33358 37.4477 3.33358 38V38C3.33358 38.5523 3.78129 39 4.33358 39H21.063C21.6153 39 22.063 38.5523 22.063 38V38Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 43C22.063 42.4477 21.6153 42 21.063 42H4.33358C3.78129 42 3.33358 42.4477 3.33358 43V43C3.33358 43.5523 3.78129 44 4.33358 44H21.063C21.6153 44 22.063 43.5523 22.063 43V43Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 48C22.063 47.4477 21.6153 47 21.063 47H4.33358C3.78129 47 3.33358 47.4477 3.33358 48V48C3.33358 48.5523 3.78129 49 4.33358 49H21.063C21.6153 49 22.063 48.5523 22.063 48V48Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 53C22.063 52.4477 21.6153 52 21.063 52H4.33358C3.78129 52 3.33358 52.4477 3.33358 53V53C3.33358 53.5523 3.78129 54 4.33358 54H21.063C21.6153 54 22.063 53.5523 22.063 53V53Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M22.063 58C22.063 57.4477 21.6153 57 21.063 57H4.33358C3.78129 57 3.33358 57.4477 3.33358 58V58C3.33358 58.5523 3.78129 59 4.33358 59H21.063C21.6153 59 22.063 58.5523 22.063 58V58Z" fill="#FAFAFA" /><path fillRule="evenodd" clipRule="evenodd" d="M26.0005 80C26.0005 79.4477 26.4482 79 27.0005 79H82.0005C82.5528 79 83.0005 79.4477 83.0005 80V82C83.0005 82.5523 82.5528 83 82.0005 83H27.0005C26.4482 83 26.0005 82.5523 26.0005 82V80Z" fill="#BFBFBF" /><rect x="0.833496" y="0.5" width={85} height={85} rx="2.5" stroke="#BFBFBF" strokeLinejoin="round" /></svg>
                                <h1>light</h1>
                            </span>
                            <span
                                onClick={(e) => { dispatch(actSetTheme2("dark")) }}
                                className='bg-slate-500 p-2 rounded-lg cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={58} height={56} viewBox="0 0 86 86" fill="none"><mask id="mask0_111470_19126" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={1} y={1} width={84} height={84}><rect x={1} y={1} width={84} height={84} rx={2} fill="white" /></mask><g mask="url(#mask0_111470_19126)"><rect x={1} y={1} width={84} height={84} rx={2} fill="#1F1F1F" /><rect x={1} y={1} width="86.9647" height={6} fill="black" /><circle cx="3.97656" cy={4} r={1} fill="#595959" /><circle cx="7.97656" cy={4} r={1} fill="#595959" /><circle cx="11.9766" cy={4} r={1} fill="#595959" /></g><path fillRule="evenodd" clipRule="evenodd" d="M26.6943 11C26.6943 10.4477 27.1421 10 27.6943 10H81.0355C81.5878 10 82.0355 10.4477 82.0355 11V15C82.0355 15.5523 81.5878 16 81.0355 16H27.6943C27.1421 16 26.6943 15.5523 26.6943 15V11Z" fill="#434343" /><path d="M1 7H23.7294V85H3C1.89543 85 1 84.1046 1 83V7Z" fill="#434343" /><path fillRule="evenodd" clipRule="evenodd" d="M6.5 16C8.433 16 10 14.433 10 12.5C10 10.567 8.433 9 6.5 9C4.567 9 3 10.567 3 12.5C3 14.433 4.567 16 6.5 16Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M12 12C12 11.4477 12.4477 11 13 11H21C21.5523 11 22 11.4477 22 12V13C22 13.5523 21.5523 14 21 14H13C12.4477 14 12 13.5523 12 13V12Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 23C21.7295 22.4477 21.2818 22 20.7295 22H4.00008C3.44779 22 3.00008 22.4477 3.00008 23V23C3.00008 23.5523 3.44779 24 4.00008 24H20.7295C21.2818 24 21.7295 23.5523 21.7295 23V23Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 28C21.7295 27.4477 21.2818 27 20.7295 27H4.00008C3.44779 27 3.00008 27.4477 3.00008 28V28C3.00008 28.5523 3.44779 29 4.00008 29H20.7295C21.2818 29 21.7295 28.5523 21.7295 28V28Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 33C21.7295 32.4477 21.2818 32 20.7295 32H4.00008C3.44779 32 3.00008 32.4477 3.00008 33V33C3.00008 33.5523 3.44779 34 4.00008 34H20.7295C21.2818 34 21.7295 33.5523 21.7295 33V33Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 38C21.7295 37.4477 21.2818 37 20.7295 37H4.00008C3.44779 37 3.00008 37.4477 3.00008 38V38C3.00008 38.5523 3.44779 39 4.00008 39H20.7295C21.2818 39 21.7295 38.5523 21.7295 38V38Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 43C21.7295 42.4477 21.2818 42 20.7295 42H4.00008C3.44779 42 3.00008 42.4477 3.00008 43V43C3.00008 43.5523 3.44779 44 4.00008 44H20.7295C21.2818 44 21.7295 43.5523 21.7295 43V43Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 48C21.7295 47.4477 21.2818 47 20.7295 47H4.00008C3.44779 47 3.00008 47.4477 3.00008 48V48C3.00008 48.5523 3.44779 49 4.00008 49H20.7295C21.2818 49 21.7295 48.5523 21.7295 48V48Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 53C21.7295 52.4477 21.2818 52 20.7295 52H4.00008C3.44779 52 3.00008 52.4477 3.00008 53V53C3.00008 53.5523 3.44779 54 4.00008 54H20.7295C21.2818 54 21.7295 53.5523 21.7295 53V53Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7295 58C21.7295 57.4477 21.2818 57 20.7295 57H4.00008C3.44779 57 3.00008 57.4477 3.00008 58V58C3.00008 58.5523 3.44779 59 4.00008 59H20.7295C21.2818 59 21.7295 58.5523 21.7295 58V58Z" fill="black" /><path fillRule="evenodd" clipRule="evenodd" d="M26.6943 79C26.6943 78.4477 27.1421 78 27.6943 78H81.0355C81.5878 78 82.0355 78.4477 82.0355 79V81C82.0355 81.5523 81.5878 82 81.0355 82H27.6943C27.1421 82 26.6943 81.5523 26.6943 81V79Z" fill="#434343" /><rect x="0.5" y="0.5" width={85} height={85} rx="2.5" stroke="black" strokeLinejoin="round" /></svg>
                                <h1>dark</h1>
                            </span>
                        </div>
                    </DropdownbtnClick>
                    <hr />

                </div>
                <div onClick={() => check()} id='xx' className={xx + ' w-full bg-zinc-950/50 '}></div>

            </div>

        </>
    )
}
function openNav() {
    if (document.getElementById("mySidenav")?.style.width !== "100%") {
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