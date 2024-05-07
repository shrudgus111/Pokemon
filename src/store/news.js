import { createSlice } from '@reduxjs/toolkit'


const newsSlice = createSlice({
    name: "news",
    initialState : {
        title : "",
    },
    reducers : {
        getTitle(state, action){
            state.title = action.payload
        },
    }
})

export const { getTitle } = newsSlice.actions;
export default newsSlice.reducer;