import { actGetPolicie } from '@redux/filters/filterSlice'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { useEffect } from 'react'

export default function useGetPolicies() {
    const Dispatch = useAppDispatch()
    const { Policie } = useAppSelector(state => state.filterSlice)

    useEffect(() => {
        Dispatch(actGetPolicie())
    }, [])

    return { Policie }


}
