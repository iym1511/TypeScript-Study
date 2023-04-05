import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Comment, addComment, deleteComment } from "../redux/commentsSlice";
import { RootState } from "../store";
import { dataType } from "../redux/data";

interface Todo {
    id: number,
    text: string,
    isChecked? : boolean
}

interface Com {
    id: number,
    comment: string,
}

// interface CommentsState {
//     comment: Comment[];
// }
// interface RootState {
//     comment: Com[];
// }

const Todolist = () => {

    const dispatch = useDispatch()

    const comments = useSelector((state :RootState)=> state.commentlists)
    console.log(comments)
    const datalist = useSelector((state :RootState)=> state.data)
    
    const [comment, setComment] = useState<Com>({
        id:0,
        comment:""
    })



    const [todolist, setTodolist] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<Todo>({
        id: 0,
        text: "",
        isChecked: false,
    });

    // state로만 만든 댓글기능
    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>):void => {
        setTodo({
            ...todo, text:e.target.value
        })
    }
    
    //  redux-toolkit을 사용한 댓글기능
    const onChangeComment = (e: ChangeEvent<HTMLInputElement>):void =>{
        setComment({
            ...comment, comment:e.target.value
        })
    }

    const todoClick = ():void => {
        // 투두 배열 유지하면서 새 투두객체 추가

        // setTodolist([
        //     ...todolist,
        //     todo
        // ])

        todolist.push({
            id: todo.id++,
            text: todo.text
        })

        // todo원본유지하면서 투두 추가
        setTodo({
            ...todo,
            id: todo.id++,
            text:"",
        })
        console.log(todolist)
    }

    const onReset = () => {
        setComment({...comment, comment : ""})
    }

    const CommentClick = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        if(comment.comment != ""){
            dispatch(addComment(comment))
        }else{
            alert("댓글을 작성해주세요!")
        }
        onReset();
    }

    return (  
        <div>
            <input type="text" value={todo.text} onChange={(e)=>onChangeTodo(e)}/>
            <button onClick={todoClick}>입력</button>

            <h1>그냥 댓글</h1>
            {
                todolist.map((a)=>(
                    <div>
                        <span>{a.text}</span>
                    </div>
                ))
            }

            <span>----------------------------------------------------------</span>

            <h1>redux-toolkit댓글</h1>

            <form onSubmit={CommentClick}>
                <input type="text" value={comment.comment} onChange={(e)=>onChangeComment(e)}/>
                <button type="submit">입력</button>
            </form>

            {
                comments.map((a :Comment, i)=>(
                    <div key={i}>
                        <span>{a.comment}</span>
                        <button onClick={()=>dispatch(deleteComment(a))}>x</button>
                    </div>
                ))
            }

            <h1>더미데이터 테스트</h1>
            {
                datalist.map((a :dataType)=>(
                    <div>
                        <p>{a.title}</p>
                        <p>{a.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Todolist;