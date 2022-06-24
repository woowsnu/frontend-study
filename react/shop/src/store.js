import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState 역할, state 하나를 slice 라고 부름
const user = createSlice({
    name: 'user',
    initialState : 'kim'
})

export default configureStore({
    reducer: {
        user : user.reducer
    }
})