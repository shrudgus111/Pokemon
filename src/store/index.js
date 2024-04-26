import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news'
import productReducer from './product'
import cardReducer from './card'
import memberReducer from './member'



const store = configureStore({
    reducer : {
        news : newsReducer,
        products : productReducer,
        card : cardReducer,
        members : memberReducer
     
    }
})

export default store; 