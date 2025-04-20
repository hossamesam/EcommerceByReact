import RangeSlider from "@components/common/RangeSlider";
import Cart from "@components/common/carts/Cart1/Cart"
import Filter from "@components/common/filters";
import i18next from "i18next";

import { useEffect, useState } from "react"
import { actGetProducts } from "src/redux/products/productsSlice";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
// import Pagination from "@components/Pagination";

import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { Pagination } from "@mui/material";

function Products() {
  const id = useParams().id
  const dispatch = useAppDispatch()

  const language = i18next.language
  const { loading, error, Data, PaginationCount } = useAppSelector((state) => state.Products);

  const Params = useParams()

  useEffect(() => {
    dispatch(actGetProducts({ id: id, page: Number(Params.prefix), sizeItems: 10 }))
  }, [dispatch])


  return (
    <Loading loading={loading} error={error} >
      <div>
        <div className="flex bg-[var(--bg)]">
          <Filter />
          <div className="flex  mt-8 w-full flex-col gap-5">
            <div
              className="grid
            grid-cols-3
            gap-4
            justify-center
            items-center
            mx-2
            max-sm:grid-cols-1
            max-md:grid-cols-1
            max-lg:grid-cols-2
            max-xl:grid-cols-3
            2xl:grid-cols-4
            "
            >
              {Data.map((item) => {
                return <Cart
                  {...item}
                  key={item.id}
                  id={item.id}
                  backgroundImage={`${import.meta.env.VITE_BaseUrl}/api/attachments/public/${item.attachments[0]?.guid}`}
                  Price={item.sellPrice}
                  Text={language === "en" ? item.nameTranslate.en : item.nameAr}
                  description={language === "en" ? item.descriptionTranslate.en : item.description} CurrencyType="EGP"
                />
              })}
            </div>

            <div className="flex justify-center items-center  w-full my-20 ">
              {/* <Pagination dir="ltr" count={PaginationCount} color="primary"
                onChange={e => window.location.replace(`./${e.target}`)}
              /> */}
              <Pagination
                dir="ltr"
                color="primary"
                defaultPage={Number(Params.prefix) + 1}
                count={PaginationCount}
                onChange={(_, e) => window.location.replace(`./${e - 1}`)}
              />
              {/* <Pagination
                PaginationCount={PaginationCount}
                routs={`Categories/`}
              /> */}
            </div>
          </div>
        </div>
      </div>

    </Loading>
  )
}


export default Products
