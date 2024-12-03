import ColorDesign from '@components/Designsystem'
import Men_store from '@components/eCommerce/_store/menStore/men_store'
import React from 'react'

function Designsystem() {
  return (
    <div className='flex justify-between items-center'>
      {/* <iframe src="http://localhost:9000/Categories/men_store/0" width={300} height={300} className='border-2 border-red-600' >
        <Men_store />
      </iframe> */}
      <ColorDesign />
    </div>
  )
}

export default Designsystem
 