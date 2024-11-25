import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FilterSize() {
    const [FilterSizeData, setFilterSizeData] = useState([])

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_BaseUrl}/api/item-sizes/search`, {})
            .then((e) => {
                setFilterSizeData(e.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    }, [])


    return (
        <div className='w-40 py-2 px-2  mx-auto flex flex-col justify-center items-center   bg-slate-100 '>
            <h5 color="initial" style={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px " }}>المقاس</h5>

            <div className='grid grid-cols-3 gap-2'>
                {FilterSizeData.map((e) => {
                    return <button key={e.name} className="text-[15px] font-bold flex justify-center items-center   text-black bg-sky-100 border-[1px] py-1 px-1 focus:outline-none hover:bg-sky-200 rounded border-sky-700">
                        {e.name}
                    </button>
                })}
            </div>

        </div>
    )
}

export default FilterSize
