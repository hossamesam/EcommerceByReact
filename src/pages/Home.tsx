import React from 'react'
import Categories from './categories'


function Home() {
    return (
        <div >
            {/* <div
                style={{
                    "textShadow": "-1px 1px 0 #000,1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
                    "color": "white"
                }}
                className="flex justify-center items-center  bg-[url('https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]   w-full  bg-center bg-cover  h-96">
                <button className='p-4 border-8 rounded-2xl bg-slate-950'>
                    ابحث عن منتجك
                </button>
            </div> */}

            <Categories />

        </div >
    )
}

export default Home
