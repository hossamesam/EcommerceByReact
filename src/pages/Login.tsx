
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import GoogleOAuth from "@components/Auth/GoogleOAuth";
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

import Error1 from '@components/common/errors/error1/error1';
import useLogin from "@hooks/useLogin";


function Login({ t }: any) {
    const {
        error,
        accessToken,
        handleSubmit,
        register,
        onSubmit,
        emailonBluerHandler,
        errors, isSubmitting,
        isDirty,
        isValid } = useLogin()

    if (accessToken) {
        return <Error1 />
    }

    return (
        <div className=''>

            <div className="flex   bg-[var(--primary)] ">

                {/* <!-- Right Pane --> */}
                <div dir={i18next.dir()} className=' w-full flex px-24 py-4 flex-col justify-center items-center  max-lg:w-full gap-4 ' >
                    <div className=" max-w-md w-96 ">
                        <h1 className=" text-3xl font-semibold py-4 text-center">{t("SignUp.signup")}</h1>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="POST"
                            className="flex flex-col gap-4   "
                        >

                            <div className='relative flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="email" >{t("SignUp.email")}</label>
                                <input {...register("email", { required: true })}
                                    id="email"
                                    name="email"
                                    onBlur={emailonBluerHandler}
                                    className="bg-[var(--input)] border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                <span className='absolute left-0 -bottom-5'>
                                    {errors.email && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email.message}</span></p>)}
                                </span>
                            </div>

                            <div className='relative flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="password" >{t("SignUp.password")}</label>
                                <input  {...register("password")}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="bg-[var(--input)] border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                <span className='absolute left-0 -bottom-5'>
                                    {errors.password && (<p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password.message}</span></p>)}
                                </span>
                            </div>

                            <div className='flex items-center justify-center'>
                                <label className='min-w-28' htmlFor="password" >{t("SignUp.rememberMe")}</label>
                                <input  {...register("rememberMe")}
                                    className="bg-[var(--input)] border-[black] mt-1  p-1 w-full border rounded-md focus:border-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                />
                            </div>
                            <span className=' text-red-500 '>
                                {error && t("SignUp.error")}
                            </span>
                            <button
                                type="submit"
                                disabled={!isDirty || !isValid || isSubmitting}
                                className="w-full bg-[var(--header)] text-[var(--textHeader)] p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 hover:cursor-pointer"
                            >
                                {t("SignUp.signup")}
                            </button>

                        </form>

                        <div className="w-max flex justify-center  my-2 bg-[var(--textColor)] text-[var(--textHeader)] p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 hover:cursor-pointer">
                            <Link
                                to={"/register"}
                                type="submit"
                            >
                                {t("SignUp.Login")}
                            </Link>
                        </div>



                        <div className='mt-8 mb-5'>
                            <h1 className="textCenterLine ">
                                <span className=' text-md font-semibold  text-center'>
                                    {t("SignUp.join")}
                                </span>
                            </h1>
                        </div>
                        <GoogleOAuth />

                    </div>
                </div>

            </div>
        </div >
    )
}
export default withTranslation()(Login);
