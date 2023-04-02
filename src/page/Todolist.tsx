import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CommentsState, addComment } from "../redux/commentsSlice";
import { RootState } from "../store";

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
    const comments = useSelector((state :RootState)=> state.comment)
    console.log(comments)
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

    const onChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setTodo({
            ...todo, text:e.target.value
        })
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
        dispatch(addComment(comment))
        console.log(todolist)
    }

    return (  
        <div>
            <input type="text" value={todo.text} onChange={(e)=>onChange(e)}/>
            <button onClick={todoClick}>입력</button>
            {/* {
                todolist.map((a)=>(
                    <div>
                        <span>{a.text}</span>
                    </div>
                ))
            } */}

            {
                comments.comment.map((a :Com)=>(
                    <div>
                        <span>{a.comment}</span>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Todolist;