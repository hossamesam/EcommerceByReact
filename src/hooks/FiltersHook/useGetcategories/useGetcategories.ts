import { actGetCategories } from '@redux/categories/categoriesSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { act, useEffect } from 'react'


export default function useGetcategories() {
  const Dispatch = useAppDispatch()
  const { Data, error, loading } = useAppSelector(state => state.categories)

  useEffect(() => {
    Dispatch(actGetCategories())
  }, [])

  return { categories: Data, error, loading }

}
