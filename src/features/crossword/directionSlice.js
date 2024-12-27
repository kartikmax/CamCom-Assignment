import { createSlice } from "@reduxjs/toolkit";

const initialState = { direction:'across' }

export const directionSlice = createSlice({
    name:'direction',
    initialState,
    reducers:{
        toggleDirection:(state)=>{
            if(state.direction==='across')
                state.direction='down'
            if(state.direction==='down')
                state.direction='across'
        }
    }
})

export const {toggleDirection} = directionSlice.actions

export default directionSlice.reducer