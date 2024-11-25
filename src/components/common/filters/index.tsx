import React from 'react'
import FilterPrice from './FilterPrice/FilterPrice'
import FilterSize from './FilterSize/FilterSize'
import Filtercolor from './FilterColor/FilterColor'
import FilterCatogry from './FilterCatogry/FilterCatogry'
import i18next from 'i18next'


function Filter() {

    return (
        <div className='min-w-34 max-w-48  max-sm:hidden   bg-slate-100 font-sans text-sm' >
            <FilterCatogry />
            <br />
            <hr />
            <FilterPrice />
            <hr />
            <FilterSize />
            <hr />
            <Filtercolor />
            <hr />
            <div className='h-44 w-full' />


        </div>
    )
}

export default Filter
