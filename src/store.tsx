import { Store } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import commentsReducer from "./redux/commentsSlice";
import dataReducer from "./redux/data";
import thunkReducer from "./redux/thunk"
import weatherThunk from "./redux/weatherThunk";

// const store= configureStore({
//     reducer:{
//         comment: commentsReducer,
//     },devTools:true
// })

const rootReducer = combineReducers({
    commentlists: commentsReducer,
    data: dataReducer,
    thunk: thunkReducer,
    weather: weatherThunk
})

const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>; // RootState 타입 정의
// 다른곳에서 dispatch 사용할때 타입오류 안나게 보장해줌
export type AppDispatch = typeof store.dispatch;

export default store

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch=typeof store.dispatch