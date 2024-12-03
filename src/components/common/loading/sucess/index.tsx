import React from 'react'
import style from './style.module.css'
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

const { sucess, slide } = style
function Sucess({ t }: any) {
    return (
        <div className={sucess}>
            <span className={slide} style={{ fontSize: i18next.language == "gr" ? "14px" : "20px" }}>
                {t("Loading.succes")}

            </span>
        </div>
    )
}

export default withTranslation()(Sucess);