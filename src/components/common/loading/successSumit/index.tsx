import React, { useEffect } from 'react'
import Lottie from "lottie-react";
import successSumit from "@assets/lottieFiles/successSumit.json";
import { use } from 'i18next';
import Home from '@pages/Home';

function index() {

    setTimeout(() => {
        return (
            <div>
                <Lottie animationData={successSumit} />
            </div>
        )
    }, 3000);
    return (<Home />)




}

export default index