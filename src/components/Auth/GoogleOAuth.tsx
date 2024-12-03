import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

function GoogleOAuth() {



    return (
        <div className='w-full   flex justify-center items-center'>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_google_id_client_OAuth}>
                <GoogleLogin
                    width="1000px"
                    size='large'
                    text='signin_with'
                    onSuccess={(credentialResponse: any) => {
                        axios.post(`${import.meta.env.VITE_BaseUrl}/api/authenticate/google`, credentialResponse)
                            .then((req) => { console.log("req: ", req) })
                            .catch((err) => { err })
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }} useOneTap
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default GoogleOAuth
