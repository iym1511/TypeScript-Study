import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let nextId = 0;

// initialState안에서쓰일 CommentsState안의 comment 배열타입 지정
export interface Comment{
    id: number;
    comment: string;
}

// initialState에서 사용할 타입
export interface CommentsState{
    comment : Comment[];
}

// 타입을 지정받은 initialState
const initialState:CommentsState={
    comment: [
        {
            id:0,
            comment:"댓글0번째"
        },
    ],
}

export const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers:{
        addComment(state, action : PayloadAction<Comment>){
            nextId++
            const commentAdd:Comment = {
                id : nextId,
                comment: action.payload.comment
            } 
            state.comment.push(commentAdd)
        }
    }
})

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;