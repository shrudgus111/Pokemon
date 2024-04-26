import { createSlice } from '@reduxjs/toolkit'


const cardSlice = createSlice({
    name: "card",
    initialState : {
        name : "",
    },
    reducers : {
        getName(state, action){
            state.name = action.payload
        },
    }
})

export const { getName } = cardSlice.actions;
export default cardSlice.reducer;