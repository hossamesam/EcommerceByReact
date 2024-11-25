import { TFilterColor } from '@types/eCommerceTypes';
import axios from 'axios';
import { useEffect, useState } from 'react'

function Filtercolor() {
    const [dataColor, setDataColor] = useState<TFilterColor[]>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BaseUrl}/api/colors`, {
        })
            .then((res) => {
                setDataColor(res.data)
            })
            .catch((err) => {
                console.log("err:")
                console.log(err)
            })
    }, [])

    return (
        <div >
            <h5 color="initial" style={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px 0" }}>اللون</h5>
            <div style={{ scrollbarWidth: "thin", scrollbarColor: "rgb(0,0,0) rgb(180,220,255)" }} className="h-48 flex flex-col ml-2 overflow-x-hidden">
                {dataColor.map((res, index) => {
                    return (
                        <div key={index} className='flex justify-between items-center px-4 '>
                            <label className='text-[19px] line-clamp-1' htmlFor={res.name}>{res.name}</label>
                            <input type="checkbox" key={res.name} value={res.name} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Filtercolor
