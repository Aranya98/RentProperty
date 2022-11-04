import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReducer";

const store=configureStore({
    reducer:{
        product:ProductReducer
    }
})
export default store