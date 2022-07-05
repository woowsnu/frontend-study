import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


const stock = createSlice({
    name: 'stock',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
})




// store에 state 보관하는 법
export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer
    }
})