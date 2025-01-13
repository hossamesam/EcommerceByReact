'use client'
import { useGetcategories } from '@hooks/FiltersHook'
import { TFilterCategory } from '@types/eCommerceTypes'
import axios from 'axios'
import i18next from 'i18next'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FilterCatogry() {
    const { categories } = useGetcategories()

    return (
        <div >
            <h5 color="initial" style={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px 0" }}>الفئة</h5>
            <div style={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(180,220,255)" }} className="h-48 flex flex-col ml-2 overflow-x-hidden">
                {categories.map((res, index) => {
                    return (
                        <Link to={"#"} key={index} className='flex font-bold text-[15px] line-clamp-3 justify-between items-center px-4 hover:bg-[var(--hoverA)]'>
                            {i18next.language === "ar" ? res.nameAr : res.nameTranslate.en}
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default FilterCatogry
