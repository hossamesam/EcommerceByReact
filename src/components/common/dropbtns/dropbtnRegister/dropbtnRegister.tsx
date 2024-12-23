import { useEffect } from 'react'
import { CircleUserRound, Globe, LogIn, LogInIcon, UserPlus, UserPlus2 } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import style from "./dropbtn.module.css";
import { Link } from 'react-router-dom';
const { dropbtn, dropup, dropup_content, Link_bt } = style
function DropbtnRegister({ t }: any) {

    return (
        <div className={dropup}>
            <Link to="/register" className={dropbtn} type="button" >
                <span><CircleUserRound size={28} /></span>
                {/* <span>	&nbsp;</span> */}
                {t("Header.register")}
            </Link>
            <div id="myDropdown" className={dropup_content} >
                <Link to="/register" className={Link_bt} >
                    <span>{t("SignUp.Login")}</span>
                    <span><UserPlus /></span>
                </Link>
                <Link to="/#" className={Link_bt} >
                    <span >{t("SignUp.signup")}</span>
                    <span ><LogInIcon /></span>
                </Link>

            </div>
        </div>
    )
}
export default withTranslation()(DropbtnRegister);


