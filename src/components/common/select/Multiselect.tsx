import { ChevronDown } from "lucide-react";
import { Ref, forwardRef, useEffect, useState } from "react";
import style from "./style.module.css";
const { dropdownHeader } = style
const styles: any = {
    dropdownHeader: {
        padding: " 3px 10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#fff",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    dropdownList: {
        border: "1px solid #ccc",
        borderRadius: "20px",
        backgroundColor: "#fff",
        maxHeight: "150px",
        overflowY: "auto",
    },
    dropdownItem: {
        padding: "10px",
        cursor: "pointer",
        borderBottom: "1px solid #f0f0f0",
    },
};
interface IMultiselect {
    options: [],
    placeHolder: string
}
const Multiselect = forwardRef<HTMLButtonElement, IMultiselect>(function Multiselect(
    { options, placeHolder }, ref) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        if (selectedOptions.includes(option)) {
            // إزالة الخيار إذا كان موجودًا
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            // إضافة الخيار إذا لم يكن موجودًا
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    useEffect(() => {
        ref.current = selectedOptions
        console.log('=================ref===================');
        console.log(ref);
        console.log('====================================');
    }, [selectedOptions])

    return (
        <div className={" w-full"}>

            <div style={styles.dropdownHeader} className={dropdownHeader} onClick={handleToggleDropdown} >
                {selectedOptions.length > 0 ? selectedOptions.join(", ") : <span className="font-thin opacity-50">{placeHolder}</span >}
                <span > <ChevronDown strokeWidth={3} />  </span>

                {isOpen && (
                    <ul style={styles.dropdownList} className={" absolute w-full top-[49px] right-0 "}>
                        {options.map((option) => (
                            <li
                                style={styles.dropdownItem}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
})



export default Multiselect;
