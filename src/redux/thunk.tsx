import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

interface apiType{
    imageUrl4: string,
    informCode: string,
    imageUrl5: string,
    actionKnack: null,
    informCause: string,
    informOverall: string,
    informData: string,
    informGrade: string,
    dataTime: string,
    imageUrl3: string,
    imageUrl2: string,
    imageUrl1: string,
}

interface Post {
    response: {
        body: {
            items: apiType[];
            numOfRows: number;
            pageNo: number;
            totalCount: number;
        };
    };
}
interface initialStateType{
    status: string;
    data: apiType[] | null;
    error: null
}

export const asyncFetch = createAsyncThunk(
    'thunkSlice/asyncFetch',
    async () => {
        const response = await axios.get<Post>('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=2023-04-16&returnType=json&serviceKey=T8f%2Bzud6ZCplc0UNr9TV7YXgtE9csbbJ0hveDrVp1zN74Z8Vo86VCeXCpvQCKD8vyWP6kcTb87sq%2Bt%2F5W%2BXi%2Fw%3D%3D&numOfRows=100&pageNo=1');
        return response.data.response.body.items
    }
)

const initialState: initialStateType = {
    status: 'idle',
    data: null,
    error: null
}

const thunkSlice = createSlice({
    name:"thunk",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(asyncFetch.pending, (state, action): void => {
            state.status = 'loading';
        });
        builder.addCase(asyncFetch.fulfilled, (state, action): void => {
            state.data = action.payload;
            state.status = 'complete';
            console.log(action.payload)
        });
        builder.addCase(asyncFetch.rejected, (state, action): void => {
            state.status = 'fail';
        });
    },
})

export const { } = thunkSlice.actions;
export default thunkSlice.reducer;