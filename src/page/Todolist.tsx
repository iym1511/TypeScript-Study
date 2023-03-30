import { ChangeEvent, useState } from "react";

interface Todo {
    id: number,
    text: string,
    isChecked : boolean
}

const Todolist = () => {

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
    }

    const todoClick = ():void => {
        // 투두 배열 유지하면서 새 투두객체 추가

        // setTodolist([
        //     ...todolist,
        //     todo
        // ])
        
        todolist.push({
            ...todo,
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

    return (  
        <div>
            <input type="text" onChange={(e)=>onChange(e)}/>
            <button onClick={todoClick}>입력</button>
            {
                todolist.map((a)=>(
                    <div>
                        <span>{a.text}</span>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Todolist;