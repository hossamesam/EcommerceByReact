import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { actAuthRegisterByGoogle } from '@redux/auth/authSlice';
import { useAppDispatch } from '@redux/hooks';
import { withTranslation } from 'react-i18next';

function GoogleOAuth({ t }: any) {

    const dispatch = useAppDispatch()
    function signByGoogle(credentialResponse: any) {
        dispatch(actAuthRegisterByGoogle(credentialResponse))
    }
    return (
        <div className='w-full flex justify-center items-center'>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_google_id_client_OAuth} >
                <GoogleLogin

                    width={"200px"}
                    locale={t("lcoale")}
                    shape="circle"
                    theme={'filled_black'}
                    logo_alignment={'left'}
                    size='large'
                    text='continue_with'
                    onSuccess={signByGoogle}
                // {(credentialResponse: any) => {
                //         axios.post(`${import.meta.env.VITE_BaseUrl}/api/authenticate/google`, credentialResponse)
                //             .then((req) => { console.log("req: ", req) })
                //             .catch((err) => { err })
                //     }}
                //     onError={() => {
                //         console.log('Login Failed');
                // }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default withTranslation()(GoogleOAuth)