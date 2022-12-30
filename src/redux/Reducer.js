import { createSlice } from "@reduxjs/toolkit";


const CountSlice = createSlice({
    name : "Count",
    initialState : {
        Count : 0
    },
    reducers : {
        
        increment(state){
           state.Count = state.Count +1 
        },
        decrement(state){
            state.Count = state.Count-1
        },
        add(state, action){

            state.Count = state.Count + action.payload

        }

    }

})

export const {increment, decrement, add} = CountSlice.actions

export default CountSlice.Reducer

