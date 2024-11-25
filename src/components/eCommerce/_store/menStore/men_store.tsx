import RangeSlider from '@components/common/RangeSlider';
import Cart from '@components/common/carts/Cart1/Cart'
import Filter from '@components/common/filters';
import i18next from 'i18next';

import { useEffect } from 'react'
import { actGetProducts } from 'src/redux/products/productsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import Pagination from '@components/Pagination';
import { useParams } from 'react-router-dom';
import { Loading } from '@components/feedback';

export default function Men_store() {
  const dispatch = useAppDispatch()
  const language = i18next.language
  const { loading, error, Data, PaginationCount } = useAppSelector((state) => state.Products);
  console.log("records_records:", Data);

  const Params = useParams()

  useEffect(() => {
    dispatch(actGetProducts({ page: Number(Params.prefix), sizeItems: 5 }))
  }, [dispatch])
  return (
    <Loading loading={loading} error={error} >
      <div>
        <div className='flex bg-[var(--bg)]'>
          <Filter />
          <div className='flex flex-col mt-8 w-full '>
            <div className='grid grid-cols-4 gap-4 justify-center items-center
      mx-2
      max-sm:grid-cols-2
      max-md:grid-cols-2
      max-lg:grid-cols-3
      max-xl:grid-cols-4
      2xl:grid-cols-5
      '>
              {Data.map((item) => {
                return <Cart backgroundImage={`${import.meta.env.VITE_BaseUrl}/api/attachments/public/${item.attachments[0].guid}`} Price={item.sellPrice}
                  Text={language === 'en' ? item.nameTranslate.en : item.nameAr}
                  description={language === 'en' ? item.descriptionTranslate.en : item.description} CurrencyType='EGP' />
              })}
            </div>
            <div className="flex justify-center items-center  w-full my-20 ">
              <Pagination PaginationCount={PaginationCount} routs={`Categories/men_store/`} />
            </div>
          </div>
        </div>
      </div>
    </Loading>
  )
}
