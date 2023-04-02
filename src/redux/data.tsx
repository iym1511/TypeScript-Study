import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface dataType {
    id:number,
    title:string,
    name:string,
}

const initialState:dataType[] =[
    {
        id:0,
        title:"후드티",
        name:"가성비"
    },
    {
        id:1,
        title:"맨투맨",
        name:"가성비"
    },
]

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{

    }
})

export const { } = dataSlice.actions;
export default dataSlice.reducer;