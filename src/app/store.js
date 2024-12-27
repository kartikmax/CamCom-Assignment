import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import timerReducer from '../features/counter/timerSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        timer:timerReducer
    }
})