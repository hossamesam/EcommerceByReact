import { withTranslation } from 'react-i18next'
import style from './CreateProductUI.module.css'
import { useGetAllFilters } from '@hooks/FiltersHook'
import Multiselect from '@components/common/select/Multiselect'
import makeAnimated from 'react-select/animated';
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Tcreate, createTypes } from '@typesTs/createTypes'
import { useAppDispatch } from '@redux/hooks'
import { actpostItemSlice } from '@redux/createItem/createItemSlice'
import Select from 'react-select';
import UploadImage from '@components/UploadImage/UploadImage'
import { useEffect, useRef } from 'react'

const { FormStyle, H1, FormStyledivs, FormStyledivtextarea,
    FormStyledivlabel, FormStyledivinput, selectStyle } = style

type IData = { "value": {}, "label": string }[]
const animatedComponents = makeAnimated();

function CreateProductUI({ t }: any) {
    const { colors, size, Policie, categories } = useGetAllFilters()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<Tcreate>({
        mode: 'onChange',
        resolver: zodResolver(createTypes)
    })
    const ref = useRef()

    const dispatch = useAppDispatch()
    function onSubmit({
        barcode, category, description,
        descriptionTranslate, nameAr, nameTranslate, policies,
        sellPrice, colors, sizes, attachments }
        : Tcreate) {

        attachments = ref.current
        const colorsID = colors.map((e: any) => { return { id: e.value } })
        const policiesID = policies.map((e: any) => { return { id: e.value } })
        const sizesNmaes = sizes.map((e: any) => e.value)
        const categoryID = { id: category.value }

        dispatch(actpostItemSlice({
            barcode,
            description,
            descriptionTranslate, nameAr, nameTranslate,
            category: categoryID,
            colors: colorsID,
            policies: policiesID,
            sizes: sizesNmaes,
            sellPrice,
            attachments
        }))
    }


    return (
        <div>
            <h1 className={H1}>{t("createpage.Title")}</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={FormStyle}>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.barcode")}</label>
                    <input {...register("barcode")} className={FormStyledivinput} placeholder={t("createpage.barcode")} type="text" />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.nameAr")}</label>
                    <input  {...register("nameAr")} className={FormStyledivinput} placeholder={t("createpage.EnternameAr")} type="text" />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.nameEn")}</label>
                    <input  {...register("nameTranslate.en")} className={FormStyledivinput} placeholder={t("createpage.EnternameEn")} type="text" />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.price")}</label>
                    <input {...register("sellPrice")} className={FormStyledivinput} placeholder={t("createpage.price")} type="text" />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.ProductType")}</label>
                    <Controller
                        control={control}
                        name='category'
                        render={({ field }) => (
                            <Select
                                options={categories.map((item) => { return { value: item.id, label: item.nameAr } as any })}
                                {...field}
                                placeholder={t("createpage.ProductType")}
                                className={"w-full"}
                                onChange={((value) => field.onChange(value))}
                            />
                        )}
                    />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.cloros")}</label>
                    <Controller
                        control={control}
                        name='colors'
                        render={({ field }) => (
                            <Select
                                options={colors.map((item) => { return { value: item.id, label: item.name } })}
                                {...field}
                                placeholder={t("createpage.cloros")}
                                className={"w-full"}
                                isMulti={true}
                                onChange={((value) => field.onChange(value as IData))}
                                components={animatedComponents}
                                closeMenuOnSelect={false}
                            />
                        )}
                    />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.sizes")}</label>
                    <Controller
                        control={control}
                        name="sizes"
                        render={({ field }) => (
                            <Select
                                options={size.map((item) => { return { value: item.name, label: item.name } as any })}
                                {...field}
                                placeholder={t("createpage.sizes")}
                                className={"w-full"}
                                isMulti={true}
                                onChange={((value) => field.onChange(value))}
                                components={animatedComponents}
                                closeMenuOnSelect={false}
                            />
                        )}
                    />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.policetranslation")}</label>
                    <Controller
                        control={control}
                        name="policies"
                        render={({ field }) => (
                            <Select
                                options={Policie.map((item) => { return { value: item.id, label: item.name.ar } as any })}
                                {...field}
                                placeholder={t("createpage.policetranslation")}
                                className={"w-full"}
                                isMulti={true}
                                onChange={((value) => field.onChange(value))}
                                components={animatedComponents}
                                closeMenuOnSelect={false}

                            />
                        )}
                    />
                </div>

                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.descriptionAr")}</label>
                    <textarea  {...register("description")} className={FormStyledivtextarea} rows={4} placeholder={t("createpage.descriptionAr")} />
                </div>
                <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.descriptionEn")}</label>
                    <textarea {...register("descriptionTranslate.en")} className={FormStyledivtextarea} rows={4} placeholder={t("createpage.descriptionEn")} />
                </div>
                <div className='col-span-2'>
                    <UploadImage ref={ref} />
                </div>
                <button
                    type="submit"
                    disabled={!isDirty || !isValid || isSubmitting}
                    className="w-full bg-[var(--header)] text-[var(--textHeader)] p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 hover:cursor-pointer"
                >
                    {t("createpage.Title")}
                </button>

            </form>

        </div>
    )
}

export default withTranslation()(CreateProductUI)

{/* <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.policetranslation")}</label>
                    <select {...register("policies")} className={selectStyle} >
                        {Policie.map((e) => <>
                            <option defaultValue={e.id} value={e.id}>
                                {e.name.ar}
                            </option>
                            <option className='font-thin text-xs' disabled>{e.description.ar}</option>
                        </>)
                        }
                    </select>
                </div> */}
{/* <div className={FormStyledivs}>
                    <label className={FormStyledivlabel}>{t("createpage.ProductType")}</label>
                    <select {...register("category.id")} className={selectStyle} >
                        {categories.map((e) => <option defaultValue={e.id} value={e.id}>{e.nameAr}</option>)}
                    </select>
                </div> */}