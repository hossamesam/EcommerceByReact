import React from 'react'
import { Menu } from '../../svg/Menu/Menu'
import style from "./styles.module.css";
import { withTranslation } from 'react-i18next';
const { SearchGlobal, successSearch, search1, input } = style

function SearchForDesktop({ widthSerch = "100%", backgroundSerch = "transparent", t }: { widthSerch?: string, backgroundSerch?: "transparent" | "black" & string, t: any }) {
    return (
        <search className={SearchGlobal} style={{ backgroundColor: backgroundSerch }} >
            <p id='successSearch' className={successSearch} style={{ width: widthSerch }} >
                <input className={search1} style={{ width: widthSerch }} id='search1' type="text" placeholder={t("Header.search")} />
                <input className={input} type='checkbox' onClick={() => {
                    document.getElementById("search1")?.focus()
                }} />
            </p>
        </search>
    )
}

export default withTranslation()(SearchForDesktop)