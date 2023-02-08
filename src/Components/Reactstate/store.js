import { configureStore } from "@reduxjs/toolkit"
import myReduce from "./Reducestate"

export const store = configureStore({
    reducer:{
        myReduce,
    }
})