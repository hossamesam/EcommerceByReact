import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import axios from 'axios';
import { RegisterIcon } from "@assets/SVGs";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import GoogleOAuth from "@components/Auth/GoogleOAuth";
import { TFormData, signupSchema } from '@types/registerTypes';



function Register({ t }: any) {


    const { handleSubmit, register,formState: { errors, isSubmitting, isDirty, isValid }} =
        useForm<TFormData>({
        mode: 'onChange',
        resolver: zodResolver(signupSchema)
    })



    async function onSubmit({ email, firstName, lastName, login, password }: TFormData) {
        const users = { email, firstName, lastName, login, password, langKey: i18next.language }
        console.log("data:");
        console.log(users);

        axios.post(`${import.meta.env.VITE_BaseUrl}/api/register`, users,
            {
                'headers': {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
        )
            // .then(() => window.location.replace("/Categories"))
            .catch((err) => console.log(err))
    }


    return (
        <div className=''>
            {/* <!-- component --> */}
            <div className="flex  mb-40">
                {/* <!-- Left Pane --> */}
                <div className="hidden my-auto   lg:flex items-center justify-center flex-1  text-black">
                    <div className="max-w-md  text-center ">
                        <RegisterIcon />
                    </div>
                </div>
                {/* <!-- Right Pane --> */}
                <div className="w-full bg-[var(--bg)] lg:w-1/2 flex items-center justify-center" dir={i18next.dir()}>
                    <div className="max-w-md w-full p-6 ">
                        <h1 className="text-3xl font-semibold mb-6  text-black text-center">{t("SignUp.signup")}</h1>
                        <h1 className="text-md font-semibold mb-6 text-black text-center">{t("SignUp.join")}</h1>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-1/1 mb-2 lg:mb-0">
                                <GoogleOAuth />
                            </div>
                        </div>
                        <div className="mt-4  text-md font-semibold text-black text-center">
                            <p>{t("SignUp.signUp-email")}</p>
                        </div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="POST"
                            className="space-y-4 h-[640px]"
                        >
                            {/* <!-- Your form elements go here --> */}
                            <div>
                                <label htmlFor="login" className=" block text-sm font-medium text-gray-700">{t("SignUp.Login")}</label>
                                <input {...register("login")}
                                    id="login"
                                    name="login"
                                    className="bg-[white] border-[black] mt-1  p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.login && (<p className=" mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.login.message}</span></p>)}
                            </div>

                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t("SignUp.firstName")}</label>
                                <input {...register("firstName")}
                                    id="firstName"
                                    name="firstName"
                                    className="bg-[white] border-[black] mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.firstName && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.firstName.message}</span></p>)}
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t("SignUp.lastName")}</label>
                                <input {...register("lastName")}
                                    id="lastName"
                                    name="lastName"
                                    className="bg-[white] border-[black] mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.lastName && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.lastName.message}</span></p>)}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t("SignUp.email")}</label>
                                <input {...register("email", { required: true })}
                                    id="email"
                                    name="email"
                                    className="bg-[white] border-[black] mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.email && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email.message}</span></p>)}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t("SignUp.password")}</label>
                                <input  {...register("password")}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="bg-[white] border-[black] mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.password && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password.message}</span></p>)}
                            </div>

                            <button
                                type="submit"
                                disabled={!isDirty || !isValid || isSubmitting}
                                className="w-full bg-slate-400 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 hover:cursor-pointer"
                            >
                                {t("SignUp.signup")}
                            </button>

                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            {/* <p>{props.haveAccount} <span onClick={() => { dispatch(signNow()) }} className="text-black hover:underline  hover:cursor-pointer font-semibold ">{props.LoginHere}</span> */}
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default withTranslation()(Register);