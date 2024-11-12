import React from 'react'
import style from "./style.module.css"
const { search, input, searchs, searchIcon, updateSearch } = style
export default function SearchForMobile() {
  return (
    <div className='flex relative justify-center items-center   '>

      <input  id='search' type="search" className={search} placeholder='search' dir="rtl" />
      <label id='searchlabel' htmlFor='search' className={searchIcon}

        onClick={(e) => {
          console.log(e.currentTarget.className);

          if (document.getElementById("search").className === search) {
            document.getElementById("search").className = updateSearch
            console.log("ok");

          }
          else (document.getElementById("search").className = search)

        }}

      >search</label>
    </div >
  )
}
