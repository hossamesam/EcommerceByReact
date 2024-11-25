import React from 'react'
import { CreditCard, Headset, ShoppingBag, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import style from "./style.module.css";
const { siteFooter, h1, Links } = style
function Footer({ t }: any) {
    return (
            <footer className={siteFooter}>
                <ul>
                    <h1 className={h1}>{t("Footer.aboutUs")}</h1>
                    <li >
                        {t("Footer.TaboutUs")}
                    </li>
                </ul>
                <ul>
                    <h1 className={h1}>{t("Footer.OurVision")}</h1>
                    <li>{t("Footer.TOurVision")}  </li>
                </ul>
                <ul>
                    <h1 className={h1}>{t("Footer.OurMission")} </h1>
                    {t("Footer.TOurMission", { returnObjects: true }).map((item: any, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul>
                    <h1 className={h1}>{t("Footer.whyUs")}</h1>
                    {t("Footer.TwhyUs", { returnObjects: true }).map((item: any, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <ul className='flex gap-4 justify-center  col-span-2'>
                    <Link to={"#"} className={Links}>
                        <li><ShoppingBag /></li>
                        <li>{t("Footer.Links.policy")}</li>
                    </Link>
                    <Link to={"#"} className={Links}>
                        <li><Truck /> </li>
                        <li>{t("Footer.Links.ShippingPolicy")}</li>
                    </Link>
                    <Link to={"#"} className={Links}>
                        <li><CreditCard /></li>
                        <li>{t("Footer.Links.payment")}</li>
                    </Link>
                    <Link to={"#"} className={Links}>
                        <li><Headset /></li>
                        <li>{t("Footer.Links.contactUs")}</li>
                    </Link>
                </ul>
                <ul className='col-span-2'>
                    <hr />
                <li className='text-[var(--textHeader)] pt-4' >{t("Footer.copyRight")}</li>
                </ul>
            </footer>

    )
}

export default withTranslation()(Footer)
