import { Store } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import commentsReducer from "./redux/commentsSlice"

// const store= configureStore({
//     reducer:{
//         comment: commentsReducer,
//     },devTools:true
// })

const rootReducer = combineReducers({
        comment: commentsReducer
    })

const store = configureStore({
    reducer:rootReducer
})


export type RootState = ReturnType<typeof rootReducer>; // RootState 타입 정의

export default store

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch=typeof store.dispatch