import React from 'react'
import style from "./style.module.css";
const { section, container, verifybtn, otpinput, otpForm } = style
export default function Otp1() {
    return (
        <>
            <section className={section}>
                <div className={container}>
                <h1 className="title">Enter OTP</h1>
                    <form className={otpForm} id="otp-form">
                    <input type="text" className="otp-input" maxLength={1} />
                    <input type="text" className="otp-input" maxLength={1} />
                    <input type="text" className="otp-input" maxLength={1} />
                    <input type="text" className="otp-input" maxLength={1} />
                    <input type="text" className="otp-input" maxLength={1} />
                </form>
                    <button className={verifybtn} id="verify-btn">Verify OTP</button>
            </div>
            </section>
        </>

    )
}
