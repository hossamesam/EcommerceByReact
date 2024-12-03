import React, { useState } from 'react'

function FilterPrice() {
  const [value1, setValue1] = useState<number[]>([1, 20000])
  const minDistance = 10

  const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  return (
    <div>
      <h5 color="initial" style={{ fontWeight: "bolder", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px 0" }}>السعر</h5>
      <form className='flex justify-between flex-col gap-2 text-[17px] font-bold  my-2'>
        <ul className='flex justify-between  px-4 '>
          <label htmlFor="min"  >اقل سعر</label>
          <input type="number" name="min" id="min" defaultValue={0} className='bg-slate-200 w-16 px-1  border-2 border-zinc-600 ' />
        </ul>
        <ul className='flex justify-between px-4 '>
          <label htmlFor="max">اعلى سعر</label>
          <input type="number" name="max" id="max" defaultValue={100000} className='bg-slate-200 w-16 px-1 border-2 border-zinc-600' />
        </ul>
        <button className="flex mx-auto justify-center items-center text-[15px] py-[2px] rounded-md border-2  w-12 font-bold   text-black bg-sky-100   focus:outline-none hover:bg-sky-200  border-sky-700">
          بحث
        </button>
      </form>
    </div>
  )
}

export default FilterPrice


// < div style = {{ width: "80%", margin: "28px 0 10px", justifyContent: "center", flexDirection: "column", alignItems: "center", display: "flex" }}>
//   <input
//     type='range'
//     style={{
//       color: "rgb(56,70,90)",
//     }}
//     dir="rtl"
//     value={value1}
//     onChange={() => handleChange1}
//     max={20000}
//     min={1}
//     valueLabelDisplay="on"
//     lang='rtl'
//     getAriaLabel={() => 'Minimum distance'}
//   />
//       </ >