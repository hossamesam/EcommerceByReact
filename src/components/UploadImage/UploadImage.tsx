import { InputLogoSVG } from '@assets/SVGs';
import { useAppSelector } from '@redux/hooks';
import axios from 'axios';
import { forwardRef, useEffect, useState } from 'react'


const UploadImage = forwardRef(function UploadImage(_, ref: any) {
    const { accessToken } = useAppSelector(state => state.authSlice)
    const [getsort, setSort] = useState([]);
    const [files, setFiles] = useState([]);
    function handleClick(e: any) {
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        // setFiles([...e.target.files]);
        for (let i = 0; i < e.target.files?.length; i++) {
            setFiles((value) => [...value, URL.createObjectURL(e.target.files[i])] as any)
        }
        axios.post(`${import.meta.env.VITE_BaseUrl}/api/attachments/public`, formData, {
            "headers": {
                "Authorization": `Bearer ${accessToken}`,
            }
        })
            .then((res) => {
                setSort([...getsort, { "guid": res.data.guid, "code": "0" }] as any)
            })
            .catch((err) => ref.current = err)

    }
    useEffect(() => {
        ref.current = getsort
    })
    return (
        <>
            <div className="flex items-start justify-center text-center w-full  ">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-300 bg-gray-200   dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:border-gray-500 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <InputLogoSVG />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden "
                        onChange={handleClick}
                    />
                </label>
            </div>
            <div className='grid xl:grid-cols-5  md:grid-cols-4 max-md:grid-cols-3 gap-2'>
                {files.map((e, index) => (
                    <div key={index} className='max-w-52 h-52 flex items-center justify-center bg-white border-2 border-neutral-500 rounded-lg border-solid  text-red-500 mt-2'>
                        <img className='object-fill h-full w-full rounded-md' src={e} />
                    </div>
                ))
                }
            </div>
        </>
    )
}
)

export default UploadImage