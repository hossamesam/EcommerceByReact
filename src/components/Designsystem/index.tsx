import React, { useEffect, useRef, useState } from 'react'
import ClonePage from './ClonePage/ClonePage'
import Dropbtn2 from '@components/common/dropbtns/dropbtn2/dropbtn2'
import { useAppDispatch } from 'src/redux/hooks'
import { actSetTheme } from 'src/redux/theme/themeSlice'
import style from './style.module.css'
const { main, ul } = style
function ColorDesign() {
  const dispatch = useAppDispatch()
  const ref = useRef()
  const [designPattern, setdesignPattern] = useState({})
  useEffect(() => {
    const designData = localStorage.getItem("design")
    designData != null && setdesignPattern(designData)

  }, [])
  function handleSubmit(e) {
    e.preventDefault();
    const FontFamiles = ref.current
    const formData = new FormData(e.target);
    const VariableColors = Object.fromEntries(formData);
    VariableColors["FontFamile"] = FontFamiles

    dispatch(actSetTheme({ theme: "custom", VariableColors: VariableColors }))
    Object.keys(VariableColors).map((e) => document.querySelector(`[Data-theme]`).style.setProperty(`--${e}`, VariableColors[e]))


  }

  return (
    <div className={main}>
      <ClonePage />
      <div>
        <form className={ul} onSubmit={handleSubmit}>
          <div className={"flex justify-between items-center"}>
            <Dropbtn2 ref={ref} />
            <h1>تغيير نوع الخط</h1>
          </div>
          <li>
            <input name="header" defaultValue={designPattern["header"]} onChange={(e) => ChngeDesign({ variable: '--headerClone', e })}
              type="color" />
            <h1>تغيير لون بداية ونهاية الصفحة</h1>
          </li>
          <li>
            <input name="textHeader" defaultValue={designPattern["textHeader"]} type="color" onChange={(e) => ChngeDesign({ variable: '--textHeaderClone', e })} />
            <h1>تغيير لون خط بداية ونهاية الصفحة</h1>
          </li>
          <li>
            <input name="bg" defaultValue={designPattern["bg"]} type="color" onChange={(e) => ChngeDesign({ variable: '--bgClone', e })} />
            <h1>تغيير لون الخلفية</h1>
          </li>
          <li>
            <input name="textColor" defaultValue={designPattern["textColor"]} type="color" onChange={(e) => ChngeDesign({ variable: '--textColorClone', e })} />
            <h1>تغيير لون الخط</h1>
          </li>
          <button type='submit' onClick={() => SaveDesign()} className='bg-green-500 p-1 border-2 rounded-xl'>اضافة</button>
        </form>

      </div>
    </div>
  )
}

export default ColorDesign


function ChngeDesign({ variable, e }: { variable: string, e: any }) {
  document.documentElement.style.setProperty(variable, e.target.value)
}
function SaveDesign() {

  document.documentElement.style.setProperty(variable, e.target.value)
}