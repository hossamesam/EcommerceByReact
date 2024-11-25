import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

function getCookie(cname:any) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

export const jwtDecote = createAsyncThunk(
    'HeaderSlice/jwtDecote',
    async (data, thunkAPI) => {
        // const cookies = new Cookies();
        // const token = await cookies.get('token')
        // const decodedHeader = await jwtDecode(JSON.stringify(token));
        const token = await getCookie("token");
        if (token !== null) {
            const decodedJwt = await parseJwt(token)
            return { "Access": decodedJwt.sub, "token": token }
        }
        else {
            return { "Access": "", "token": "pending" }
        }

        // try {
        // } catch (error) {
        //     console.log('==================decodedJwt==================');
        //     console.log("error:", error);
        //     console.log('==================decodedJwt==================');
        //     return { "Access": "pending", "token": "pending" }
        // }

        // const state = thunkAPI.getState().HeaderSlice
        // .sub
    })


const HeaderSlice = createSlice({
    name: 'HeaderSlice',
    initialState: {
        signnow: false,
        Access: "pending",
        token: "pending",
    },
    reducers: {
        signNow: state => {
            state.signnow = !state.signnow
        },
        LogoutAction: state => {
            state.Access = ""
            state.token = ""
            document.cookie = "token=null; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(jwtDecote.fulfilled, (state, action) => {
                state.Access = action.payload.Access
                state.token = JSON.parse(action.payload.token).id_token
            })
        builder
            .addCase(jwtDecote.pending, (state, action) => {
                state.Access = "pending"
            })
        builder
            .addCase(jwtDecote.rejected, (state, action) => {
                state.Access = ""
            })
    }
})
export const { signNow, LogoutAction } = HeaderSlice.actions
export default HeaderSlice.reducer