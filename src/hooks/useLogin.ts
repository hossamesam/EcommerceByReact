import React from 'react'
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { actAuthLogin, actAuthRegister } from '@redux/auth/authSlice';
import { TFormDataLogin, logInSchema } from '@typesTs/logInTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { LoadingInfo } from '@components/common/loading';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
    const emailonBluerHandler = (e: React.FocusEvent<HTMLInputElement>) => console.log(e)
    const navigate = useNavigate()
    const { error, loading, accessToken } = useAppSelector(state => state.authSlice)
    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid } } =
        useForm<TFormDataLogin>({
            mode: 'onChange',
            resolver: zodResolver(logInSchema)
        })

    const dispatch = useAppDispatch()


    async function onSubmit({ email, password, rememberMe }: TFormDataLogin) {
        dispatch(actAuthLogin({ email, password, rememberMe }))
            .unwrap()
            .then(() => navigate("/"))
    }

    return ({
        error, loading, accessToken, handleSubmit,
        register, onSubmit, emailonBluerHandler,
        errors, isSubmitting, isDirty, isValid
    })
}
