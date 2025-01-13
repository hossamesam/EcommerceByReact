import { actGetcolors } from '@redux/filters/filterSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect } from 'react'


export default function useGetcolors() {
  const Dispatch = useAppDispatch()
  const { colors } = useAppSelector(state => state.filterSlice)
  useEffect(() => {
    Dispatch(actGetcolors())
  }, [])

  return { colors }

}
