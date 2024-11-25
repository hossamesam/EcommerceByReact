'use client'
import { TFilterCategory } from '@types/eCommerceTypes'
import axios from 'axios'
import i18next from 'i18next'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FilterCatogry() {
    const [DataCategories, SetDataCategories] = useState<TFilterCategory[]>([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BaseUrl}/api/categories`)
            .then((e) => {
                SetDataCategories(e.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h5 color="initial" style={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px 0" }}>الفئة</h5>
            <div style={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(190,220,255)" }} className="h-42 flex flex-col ml-2 px-4 overflow-x-hidden" >
                {DataCategories.map((e) => <Link to={"#"} className='hover:text-indigo-700 text-[15px] font-bold   '>{i18next.language === "ar" ? e.nameAr : e.nameTranslate.en}</Link>)}
            </div>
        </div>
    )
}

export default FilterCatogry
