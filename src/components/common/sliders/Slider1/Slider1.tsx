import React from 'react'
import style from './style.module.css'
const { ul, section, body, fullHeight, paddingtb, checkbox, first, scnd, thrd, foth, oveHide, checkboxfirst, checkboxscnd, checkboxthrd, checkboxfoth, sliderHeightPadding } = style

export default function Slider1() {
    return (
        <div className={body}>

            <div className={fullHeight + " " + oveHide + "px-4 px-sm-0 " + section}>
                <div className="container">
                    <div className="row full-height justify-center content-center">
                        <div className={"col-lg-10 col-xl-8 align-self-center " + paddingtb}>
                            <div className={section + " mx-auto text-center " + sliderHeightPadding}>
                                <input className={checkbox + " " + first} type="radio" id="slide-1" name="slider" defaultChecked />
                                <label htmlFor="slide-1" />
                                <input className={checkbox + " " + scnd} type="radio" name="slider" id="slider-2" />
                                <label htmlFor="slider-2" />
                                <input className={checkbox + " " + thrd} type="radio" name="slider" id="slider-3" />
                                <label htmlFor="slider-3" />
                                <input className={checkbox + " " + foth} type="radio" name="slider" id="slider-4" />
                                <label htmlFor="slider-4" />
                                <ul className={ul}>
                                    <li>
                                        <span>MALE GOOFY FACE</span>
                                    </li>
                                    <li>
                                        <span>TOY PIG</span>
                                    </li>
                                    <li>
                                        <span>SHY PORTRAIT</span>
                                    </li>
                                    <li>
                                        <span>SKATEBOARD FACE</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
