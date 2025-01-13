import { restAuth } from '@redux/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { LogOut } from 'lucide-react'
import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function BtnLogout({ t }: any) {
    const { accessToken } = useAppSelector(state => state.authSlice)
    const dispatch = useAppDispatch()

    if (accessToken) {
        return (

            <Link to="./" onClick={() => dispatch(restAuth())}  >
                <span >
                    <LogOut size={28} />
                </span>
                {t("Header.logout")}
            </Link >
        )
    }
    else return false
}

export default withTranslation()(BtnLogout)