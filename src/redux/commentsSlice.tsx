import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let nextId = 0;

// initialState안에서쓰일 CommentsState안의 comment 배열타입 지정
export interface Comment{
    id: number;
    comment: string;
}

// initialState에서 사용할 타입 (배열안에 한번 더써줄때 방법)
// export interface CommentsState{
//     commentlist : Comment[];
// }

// 타입을 지정받은 initialState
const initialState:Comment[] = [
        {
            id:0,
            comment:"댓글0번째"
        },
]

// 타입을 지정받은 initialState (배열안에 한번 더써줄때 방법)
// const initialState:CommentsState={
//     commentlist: [
//         {
//             id:0,
//             comment:"댓글0번째"
//         },
//     ],
// }

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
            state.push(commentAdd)
        },
        deleteComment(state, action:PayloadAction<Comment>){
            return state.filter((a)=>a.id !== action.payload.id)
        }
    }
})

export const { addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;