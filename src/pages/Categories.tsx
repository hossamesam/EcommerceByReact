import Categorie from '@components/eCommerce/Category/Categorie';
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function Categories({ t }: any) {
    return (
        <div className='grid  grid-cols-2'>
            <Categorie Text={t("category.womens")} link='./womens_store' backgroundImage='/src/assets/image_catogrey/women_catogrey.jpg' backgroundPosition='center' backgroundSize='contain' />
            <Categorie Text={t("category.men")} link='./men_store' backgroundImage='/src/assets/image_catogrey/man_catogrey.jpg' backgroundPosition='inherit' backgroundSize='cover' />
            <Categorie Text={t("category.shoes")} link='./shoes_store' backgroundImage='/src/assets/image_catogrey/shoes_catogrey.jpg' backgroundPosition='center' backgroundSize='cover' />
            <Categorie Text={t("category.babys")} link='./babys_store' backgroundImage='/src/assets/image_catogrey/baby_catogrey.jpg' backgroundPosition='0px -20px' backgroundSize='cover' />
        </div>
    )
}

export default withTranslation()(Categories);

{/* <nav className={'grid  -z-50 ease-out bg-neutral-100 absolute w-full p-8  grid-cols-2 max-sm:grid-cols-1 items-center max-sm:gap-2  gap-16 '}>
    <Link to="/man_store" className='relative   h-96 w-full object-contain rounded-lg filter  hover:scale-105 hover:grayscale-[50%]' >
        <div className="absolute max-sm:text-xs   flex w-full h-1/5 bottom-0 items-center justify-center text-white bg-black font-sans font-bold">{t("category.Mens")}</div>
    </Link>
    <Link to="/woman_store/page/1" className='relative  h-96 w-full  object-cover rounded-lg  hover:scale-105 hover:grayscale-[50%]' >
        <div className='absolute max-sm:text-xs flex w-full  h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{t("category.womens")}</div>
    </Link>
    <Link to="/baby_store" className='relative   h-96 w-full  object-fill rounded-lg  hover:scale-105 hover:grayscale-[50%]' >
        <div className='absolute max-sm:text-xs flex w-full h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{t("category.babys")}</div>
    </Link>
    <Link to="/shoses_store" className='relative   h-96 w-full  object-fill rounded-lg  hover:scale-105 hover:grayscale-[50%]' >
        <div className='absolute max-sm:text-xs flex w-full h-1/5 items-center bottom-0 justify-center text-white bg-black font-sans font-bold'>{t("category.shoes")}</div>
    </Link>
</nav> */}