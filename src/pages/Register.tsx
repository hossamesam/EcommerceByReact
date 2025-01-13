import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import GoogleOAuth from "@components/Auth/GoogleOAuth";
import { TFormData, signupSchema } from '@typesTs/registerTypes';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { actAuthRegister } from '@redux/auth/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import Error1 from '@components/common/errors/error1/error1';
import { useEffect } from 'react';


function Register({ t }: any) {
    const navigate = useNavigate()

    const emailonBluerHandler = (e: React.FocusEvent<HTMLInputElement>) => console.log(e)
    const { error, loading, accessToken } = useAppSelector((state) => state.authSlice)
    const { handleSubmit, register, formState: { errors, isSubmitting, isDirty, isValid } } =
        useForm<TFormData>({
            mode: 'onChange',
            resolver: zodResolver(signupSchema)
        })

    const dispatch = useAppDispatch()


    async function onSubmit({ email, firstName, lastName, password, login }: TFormData) {
        dispatch(actAuthRegister({ email, firstName, lastName, password, login }))
            .unwrap()
            .then(() => navigate("/SuccessSumit"))
    }


    if (accessToken) {
        return <Error1 />
    }

    return (
        <div className=''>
            {/* <!-- component --> */}
            <div className="flex   bg-[var(--primary)] text-sm">

                {/* <!-- Right Pane --> */}
                <div dir={i18next.dir()} className=' w-full flex px-24 py-4 flex-col justify-center items-center  max-lg:w-full gap-4 ' >
                    <div className=" max-w-md w-96 ">
                        <h1 className=" text-3xl font-semibold py-4 text-center">{t("SignUp.Login")}</h1>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="POST"
                            className="flex flex-col gap-4   "
                        >
                            {/* <!-- Your form elements go here --> */}
                            {/* <div>
                                <label htmlFor="login">{t("SignUp.Login")}</label>
                                <input {...register("login")}
                                    id="login"
                                    name="login"
                                    className="bg-[var(--input)] border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.login && (<p className=" mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.login.message}</span></p>)}
                            </div> */}

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28 ' htmlFor="firstName" >{t("SignUp.firstName")}</label>
                                <input {...register("firstName")}
                                    id="firstName"
                                    name="firstName"
                                    className=" bg-[var(--input)] border-[black] mt-1 p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            {errors.firstName && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.firstName.message}</span></p>)}

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="lastName" >{t("SignUp.lastName")}</label>
                                <input {...register("lastName")}
                                    id="lastName"
                                    name="lastName"
                                    className="bg-[var(--input)] border-[black] mt-1 p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            {errors.lastName && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.lastName.message}</span></p>)}

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="login" >{t("SignUp.username")}</label>
                                <input {...register("login")}
                                    id="login"
                                    name="login"
                                    className="bg-[var(--input)] border-[black] mt-1 p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            {errors.login && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.login.message}</span></p>)}

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="email" >{t("SignUp.email")}</label>
                                <input {...register("email", { required: true })}
                                    id="email"
                                    name="email"
                                    onBlur={emailonBluerHandler}
                                    className="bg-[var(--input)] border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            {errors.email && (<p className="mt-2 ltr text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email.message}</span></p>)}

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="password" >{t("SignUp.password")}</label>
                                <input  {...register("password")}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="bg-[var(--input)] border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            {errors.password && (<p className="mt-2 ltr text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password.message}</span></p>)}

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="password_repeat" >{t("SignUp.password_confirm")}</label>
                                <input
                                    {...register("password_repeat")}
                                    type="password"
                                    className="bg-[var(--input)] ltr border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                            </div>
                            {errors.password_repeat && (<p className="mt-2 text-sm  text-red-600 dark:text-red-500"><span className="font-medium">{errors.password_repeat.message}</span></p>)}
                            <button
                                type="submit"
                                disabled={!isDirty || !isValid || isSubmitting}
                                className="w-full bg-[var(--header)] ltr text-[var(--textHeader)] p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 hover:cursor-pointer"
                            >
                                {t("SignUp.signup")}
                            </button>
                        </form>


                        <div className='my-8'>
                            <h1 className="textCenterLine ">
                                <span className=' text-md font-semibold  text-center'>
                                    {t("SignUp.join")}
                                </span>
                            </h1>
                            <div className="mt-8 flex flex-col lg:flex-row items-center justify-between">
                                <div className="w-full lg:w-1/1 mb-2 lg:mb-0">
                                    <GoogleOAuth />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- Left Pane --> */}

            </div>
        </div >
    )
}
export default withTranslation()(Register);

// <div className="hidden my-auto   lg:flex items-center justify-center flex-1  text-black">
//     <div className="max-w-md  text-center ">
//         {/* <RegisterIcon /> */}

//         {/* <Lottie style={{ width: "30vw" }}  animationData={formAnimy} /> */}
//         {loading === "pending" && <Lottie animationData={LoadingFormPage} />}
//         {loading === "idle" && <Lottie animationData={formAnimy2} />}
//         {loading === "succeeded" && <Lottie animationData={successSumit2} />}
//     </div>
// </div>
