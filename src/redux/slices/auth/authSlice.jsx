import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import baseURL from '../../../utils/baseURL'


const initialState = {
    loading: false,
    error: null,
    users: [],
    user:{},
    profile:{},
    userAuth:{
        loading: false,
        error:null,
        userInfo:{}
    }
}

export const userRegisterAction = createAsyncThunk(
    'auth/register',
    async({
        username, email, name, password, confirmpassword
    },
    {rejectWithValue, getState, dispatch}
    ) =>{
        try {
            const data = await axios.post(`${baseURL}/auth/register`,{
                username, email, name, password, confirmpassword
            })
            return data
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
            
        }

    }
)

export const userLoginAction = createAsyncThunk(
    'auth/login',
    async({username, password}, {rejectWithValue, getState, dispatch}) =>{
        try {
            const data = await axios.post(`${baseURL}/auth/login`,{
                username, password
            })
            return data            

        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(userLoginAction.pending, (state, action) =>{
            state.userAuth.loading = true;
        })
        builder.addCase(userLoginAction.fulfilled, (state, action) =>{
            state.userAuth.userInfo = action.payload.data
            state.userAuth.loading = false
        })
        builder.addCase(userLoginAction.rejected, (state, action) =>{
            state.userAuth.error = action.payload
            state.userAuth.loading = false
        })

        

        builder.addCase(userRegisterAction.pending, (state, action) =>{
            state.userAuth.loading = true;
        })
        builder.addCase(userRegisterAction.fulfilled, (state, action) =>{
            state.userAuth.userInfo = action.payload.data
            state.userAuth.loading = false
        })
        builder.addCase(userRegisterAction.rejected, (state, action) =>{
            state.userAuth.error = action.payload
            state.userAuth.loading = false
        })

    }
})

const authReducer = authSlice.reducer

export default authReducer;