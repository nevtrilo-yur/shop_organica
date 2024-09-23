import { configureStore } from "@reduxjs/toolkit";
import counterGoodsReducer from '../slices/slice'



export default configureStore({
    reducer: {
        counterGoods: counterGoodsReducer
    }
})