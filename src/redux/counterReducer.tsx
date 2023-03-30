import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number
}

const initialState:CounterState={
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{

    }
})