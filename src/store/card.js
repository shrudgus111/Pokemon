import { createSlice } from '@reduxjs/toolkit'


const cardSlice = createSlice({
    name: "card",
    initialState : {
        name : "",
        series: "",
    },
    reducers : {
        getName(state, action){
            state.name = action.payload
        },
        getSeries(state, action){
            state.series = action.payload
        }
    }
})

export const { getName, getSeries } = cardSlice.actions;
export default cardSlice.reducer;