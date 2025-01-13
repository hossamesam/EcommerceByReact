import { actGetsize } from '@redux/filters/filterSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect } from 'react'


export default function useGetsize() {
  const Dispatch = useAppDispatch()
  const { size } = useAppSelector(state => state.filterSlice)

  useEffect(() => {
    Dispatch(actGetsize())
  }, [])

  return { size }

}
