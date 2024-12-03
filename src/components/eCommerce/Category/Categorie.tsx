import React from 'react'
import style from "./style.module.css";
import { Categorietype } from "@typesTs/eCommerceTypes";
import { Link } from 'react-router-dom';
const { categorie, text } = style

function Categorie({
    backgroundImage = '/src/assets/setimg.png',
    backgroundSize = "contain",
    backgroundPosition = "center",
    Text = "enter text element",
    link = "./#"
}: Categorietype) {
    return (

        <Link to={link}>
            <div className={categorie} style={
                {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize,
                    backgroundPosition,
                }}>
                <div className={text}>{Text}</div>
            </div>
        </Link>
    )
}

export default Categorie
