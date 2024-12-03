import Categorie from '@components/eCommerce/Category/Categorie';
import i18next from 'i18next';
import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { actGetCategories } from 'src/redux/categories/categoriesSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';


function Categories({ t }: any) {
    const dispatch = useAppDispatch()
    const { Data, error, loading } = useAppSelector((state) => state.categories);

    useEffect(() => {
        dispatch(actGetCategories({ page: 0, sizeItems: 1 }))
    }, [dispatch])

    return (
        <div className='grid
        mx-auto
        gap-2
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
        2xl:grid-cols-2
        '>
            {/* {Data.map((e) => (
                <div>
                    <Categorie Text={(i18next.language == "ar" ? e.nameAr : e.nameTranslate.en).toString()} link={`${e.code}/${e.id}`} backgroundImage='/src/assets/setimg.png' backgroundPosition='inherit' backgroundSize='cover' />
                </div>
            ))} */}
            <Categorie Text={t("category.men")} link='/Categories/men_store/0' backgroundImage='/src/assets/image_catogrey/man_catogrey.jpg' backgroundPosition='inherit' backgroundSize='cover' />
            <Categorie Text={t("category.womens")} link='/Categories/womens_store' backgroundImage='/src/assets/image_catogrey/women_catogrey.jpg' backgroundPosition='center' backgroundSize='contain' />
            <Categorie Text={t("category.shoes")} link='/Categories/shoes_store' backgroundImage='/src/assets/image_catogrey/shoes_catogrey.jpg' backgroundPosition='center' backgroundSize='cover' />
            <Categorie Text={t("category.babys")} link='/Categories/babys_store' backgroundImage='/src/assets/image_catogrey/baby_catogrey.jpg' backgroundPosition='0px -20px' backgroundSize='cover' />

        </div>
    )
}

export default withTranslation()(Categories);
