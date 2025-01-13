import { actGetPolicie, actGetcolors, actGetsize } from '@redux/filters/filterSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect } from 'react'
import { useGetcategories } from '..';
import { actGetCategories } from '@redux/categories/categoriesSlice';


export default function useGetsize() {
  const Dispatch = useAppDispatch()
  const { size, Policie, colors } = useAppSelector(state => state.filterSlice)
  const { categories } = useGetcategories()
  useEffect(() => {
    Dispatch(actGetPolicie())
    Dispatch(actGetsize())
    Dispatch(actGetcolors())
    Dispatch(actGetCategories())
  }, [])

  return { size, Policie, colors, categories }

}
