import { createSlice } from "@reduxjs/toolkit";

// 초기값 설정
const initialAuthState = {
    isAuthenticated: false
}

// useState 역할, state 하나를 slice 라고 부름
const AuthSlice = createSlice({
    name: 'authentication',
    initialState : initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
