import { createSlice } from '@reduxjs/toolkit'

// useState 역할, state 하나를 slice 라고 부름
const user = createSlice({
    name: 'user',
    initialState : {name : 'kim', age: 20},
    reducers : {
        changeName(state){
            state.name = 'park'
        },
        addAge(state, action){
            state.age += action.payload;
        }
    }
})

export let { changeName, addAge } = user.actions 

export default user;