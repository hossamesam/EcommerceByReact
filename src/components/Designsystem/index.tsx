import React, { useEffect, useRef, useState } from 'react'
import ClonePage from './ClonePage/ClonePage'
import DropbtnDesignsystem from '@components/common/dropbtns/dropbtnDesignsystem/dropbtnDesignsystem'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { actSetTheme, actSetTheme2 } from 'src/redux/theme/themeSlice'
import style from './style.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
const { main, ul } = style

type IRGB = "/^#([0-9a-f]{3}|[0-9a-f]{6})$/i"
type IthemeState = { "header": IRGB, "textHeader": IRGB, "bg": IRGB, "textColor": IRGB, "FontFamiles"?: string }

function ColorDesign() {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(state => state.theme)
  const ref = useRef()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IthemeState>()
  const onSubmit: SubmitHandler<IthemeState> = (data) => {
    data["FontFamiles"] = ref.current
    dispatch(actSetTheme2(data))
  }

  return (
    <div className={main}>

      <ClonePage />
      <div>
        <form className={ul} onSubmit={handleSubmit(onSubmit)}>
          <div className={"flex justify-between items-center"}>
            <DropbtnDesignsystem ref={ref} />
            <h1>تغيير نوع الخط</h1>
          </div>
          <li>
            <input  {...register("header")}
              onChange={(e) => ChngeDesign({ variable: '--headerClone', e })}
              type="color" />
            <h1>تغيير لون بداية ونهاية الصفحة</h1>
          </li>
          <li>
            <input {...register("textHeader")}
              type="color"
              onChange={(e) => ChngeDesign({ variable: '--textHeaderClone', e })}
            />
            <h1>تغيير لون خط بداية ونهاية الصفحة</h1>
          </li>
          <li>
            <input {...register("bg")}
              // defaultValue={designPattern["bg"]}
              type="color"
              onChange={(e) => ChngeDesign({ variable: '--bgClone', e })}
            />
            <h1>تغيير لون الخلفية</h1>
          </li>
          <li>
            <input {...register("textColor")}
              // defaultValue={designPattern["textColor"]}
              type="color"
              onChange={(e) => ChngeDesign({ variable: '--textColorClone', e })}
            />
            <h1>تغيير لون الخط</h1>
          </li>
          <button
            type='submit'
            // onClick={() => SaveDesign()}
            className='bg-green-500 p-1 border-2 rounded-xl'>اضافة</button>
        </form>

      </div>
    </div>
  )
}

export default ColorDesign


function ChngeDesign({ variable, e }: { variable: string, e: any }) {
  document.documentElement.style.setProperty(variable, e.target.value)
}
function SaveDesign({ variable, e }: { variable: string, e: any }) {
  document.documentElement.style.setProperty(variable, e.target.value)
}