import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news'
import productReducer from './product'
import cardReducer from './card'
import memberReducer from './member'
import boardReducer from './board'



const store = configureStore({
    reducer : {
        news : newsReducer,
        products : productReducer,
        card : cardReducer,
        members : memberReducer,
        boards : boardReducer
     
    }
})

export default store; 