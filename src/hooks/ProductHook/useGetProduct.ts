import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect, useMemo } from 'react'
import { actGetProducts, SetPaginationCountList } from '@redux/products/productsSlice';
import { useParams } from 'react-router-dom';
import { TgetAllItemstype } from '@typesTs/eCommerceTypes';
import { use } from 'i18next';
import { createSelector } from "@reduxjs/toolkit";

createSelector

export default function useGetProduct(quiry: TgetAllItemstype) {
  const dispatch = useAppDispatch()
  const { Data, error, loading, DataOfItem, PaginationCount, PaginationCountList } = useAppSelector((state) => state.Products);

  sizeItems: PaginationCountList

  try {
    if (!!quiry) {
      const id = useParams().id
      const Params = useParams()
      useEffect(() => {
        dispatch(actGetProducts({
          page: Number(Params.prefix), id: id, sizeItems: PaginationCountList}))
      }, [dispatch])
    }
    else {
      useEffect(() => {
        const id = useParams().id
        const Params = useParams()
        dispatch(actGetProducts({ id: id, page: Number(Params.prefix), sizeItems: PaginationCountList }))
      }, [dispatch])
    }
    return { Data, error, loading, DataOfItem, PaginationCount, PaginationCountList }
  } catch (error) {
    return { Data, error, loading, DataOfItem, PaginationCount, PaginationCountList }
  }

}
