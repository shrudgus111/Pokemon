import { createSlice } from '@reduxjs/toolkit'


const cardSlice = createSlice({
    name: "card",
    initialState : {
        name : "",
        series: "",
        onoff: "",
        modal: "",
    },
    reducers : {
        getName(state, action){
            state.name = action.payload
        },
        getSeries(state, action){
            state.series = action.payload
        },
        getOnoff(state, action){
            state.onoff = action.payload
        },
        getModal(state, action){
            state.modal = action.payload
        }
    }
})

export const { getName, getSeries, getOnoff, getModal } = cardSlice.actions;
export default cardSlice.reducer;