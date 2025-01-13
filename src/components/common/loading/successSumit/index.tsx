import React, { useEffect } from 'react'
import Lottie from "lottie-react";
import successSumit from "@assets/lottieFiles/successSumit.json";
import { use } from 'i18next';
import Home from '@pages/Home';

function index() {

    // setTimeout(() => {
    //     return (
    //         <div>
    //             <Lottie animationData={successSumit} />
    //         </div>
    //     )
    // }, 3000);
    // return (<Home />)

    return <>
        <div className='w-full py-8 flex-col flex justify-center items-center'>
            <div className='w-1/2 '>
                <Lottie loop={{ "Type": false }} animationData={successSumit} />
            </div>
            <span>شكرا لك سيتم ارسال ايميل التنشيط علي الخاص</span>
        </div>
    </>


}

export default index