import { useParams } from 'react-router-dom';
import style from './style.module.css'
import React from 'react'
const { center, active, pagination } = style
function Pagination({ PaginationCount, routs }: { PaginationCount: number, routs: string }) {

    const handleChange = (value: number) => {
        window.location.replace("./#")
    };
    const Params = useParams()
    const hrefChange = ({ act }: { act: "plus" | "minus" }) => {
        if (true) {
            if (PaginationCount - 1 > Number(Params.prefix) && act == "plus") {
                return `./${Number(Params.prefix) + 1}`

            }
            if (0 < Number(Params.prefix) && act == "minus") {
                return `./${Number(Params.prefix) - 1}`

            }
        }
        else `./`
    }
    return (
        <div className={center}>

            <div className={pagination} dir='ltr'>


                <a href={hrefChange({ act: "minus" })}>«</a>
                {
                    Array.from({ length: PaginationCount }, (_, index) => (
                        <a className={index == Number(Params.prefix) && active} href={`./${index}`}  onClick={() => handleChange(index)} key={index}> {index}</a>
                    ))
                }
                {/* <button className={active}>6</button> */}
                <a href={hrefChange({ act: "plus" })} >»</a>
            </div>
        </div>
    )
}

export default Pagination
