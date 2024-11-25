import React, { useState, useEffect } from "react";
import style from "./PriceRangeSlider.module.css"
const { minBox, maxBox, minvalStyle, maxvalstyle, minInputStyle, maxInputStyle, doublesliderbox, rangeslider, slidertrack, mintooltip, maxtooltip, inputbox } = style
const CatlogPriceFilter = ({ min, max }: { min: number; max: number }) => {
    const initialMinPrice = min;
    const initialMaxPrice = max;

    const [sliderMinValue] = useState(initialMinPrice);
    const [sliderMaxValue] = useState(initialMaxPrice);

    const [minVal, setMinVal] = useState(initialMinPrice);
    const [maxVal, setMaxVal] = useState(initialMaxPrice);
    const [minInput, setMinInput] = useState(initialMinPrice);
    const [maxInput, setMaxInput] = useState(initialMaxPrice);

    const [isDragging, setIsDragging] = useState(false);

    const minGap = 1;

    useEffect(() => {
        setSliderTrack();
    }, [minVal, maxVal]);

    const slideMin = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= sliderMinValue && maxVal - value >= minGap) {
            setMinVal(value);
            setMinInput(value);
        }
    };

    const slideMax = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value <= sliderMaxValue && value - minVal >= minGap) {
            setMaxVal(value);
            setMaxInput(value);
        }
    };

    const setSliderTrack = () => {
        const range = document.querySelector(".slider-track");

        if (range) {
            const minPercent =
                ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
            const maxPercent =
                ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

            range.style.left = `${minPercent}%`;
            range.style.right = `${100 - maxPercent}%`;
        }
    };

    const handleMinInput = (e) => {
        const value =
            e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
        if (value >= sliderMinValue && value < maxVal - minGap) {
            setMinInput(value);
            setMinVal(value);
        }
    };

    const handleMaxInput = (e) => {
        const value =
            e.target.value === "" ? sliderMaxValue : parseInt(e.target.value, 10);
        if (value <= sliderMaxValue && value > minVal + minGap) {
            setMaxInput(value);
            setMaxVal(value);
        }
    };

    const handleInputKeyDown = (e, type) => {
        if (e.key === "Enter") {
            const value = parseInt(e.target.value, 10);
            if (
                type === "min" &&
                value >= sliderMinValue &&
                value < maxVal - minGap
            ) {
                setMinVal(value);
            } else if (
                type === "max" &&
                value <= sliderMaxValue &&
                value > minVal + minGap
            ) {
                setMaxVal(value);
            }
        }
    };

    const startDrag = () => {
        setIsDragging(true);
    };

    const stopDrag = () => {
        setIsDragging(false);
    };

    return (
        <div className={doublesliderbox}>
            <div className={inputbox}>
                <div className={minBox}>
                    <input
                        type="number"
                        value={minInput}
                        onChange={handleMinInput}
                        onKeyDown={(e) => handleInputKeyDown(e, "min")}
                        className={minInputStyle}
                        min={sliderMinValue}
                        max={maxVal - minGap}
                    />
                </div>
                <div className={maxBox}>
                    <input
                        type="number"
                        value={maxInput}
                        onChange={handleMaxInput}
                        onKeyDown={(e) => handleInputKeyDown(e, "max")}
                        className={maxInputStyle}
                        min={minVal + minGap}
                        max={sliderMaxValue}
                    />
                </div>
            </div>
            <div className={rangeslider}>
                <div className={slidertrack}></div>
                <input
                    type="range"
                    min={sliderMinValue}
                    max={sliderMaxValue}
                    value={minVal}
                    onChange={slideMin}
                    onMouseDown={startDrag}
                    onMouseUp={stopDrag}
                    onTouchStart={startDrag}
                    onTouchEnd={stopDrag}
                    className={minvalStyle}
                />
                <input
                    type="range"
                    min={sliderMinValue}
                    max={sliderMaxValue}
                    value={maxVal}
                    onChange={slideMax}
                    onMouseDown={startDrag}
                    onMouseUp={stopDrag}
                    onTouchStart={startDrag}
                    onTouchEnd={stopDrag}
                    className={maxvalstyle}
                />
                {isDragging && <div className={mintooltip}>{minVal}</div>}
                {isDragging && <div className={maxtooltip}>{maxVal}</div>}
            </div>
        </div>
    );
};

export default CatlogPriceFilter;
