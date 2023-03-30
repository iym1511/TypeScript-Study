import { ChangeEvent, useState } from "react";
import { Item } from "../type/Item";

    // ? 는 있어도되고 없어도되는것
    interface typeState {
        counter: number;
        name?: string
    }


const Todo = () => {
    
    interface Add {
        (num1: number, num2:number): number;
    }

    const add: Add = function(x, y){
        return x + y
    }
    add(10,20);

    interface IsAdult {
        (age:number):boolean;
    }

    const a:IsAdult = (age) => {
        return age > 19;
    }

    console.log(a)

    // 함수
    // name? 있어도되고 없어도되는 선택적 (undefind거나 string이거나 둘중하나)
    function hello (name?: string) {
        return `Hello, ${name || "world"}`;
    }
    console.log(hello)

    // 선택적 매개변수가 필수적매개변수 앞에오면 오류남
    function hello1 (name: string, age? : number): string {
        if( age !== undefined){
            return `Hello, ${name}. you are ${age}.`;
        }else{
            return `Hello, ${name}`;
        }
    }

    // 선택적 매개변수가 필수적 매개변수 앞에왔을때 사용법
    function hello2 (age: number | undefined, name: string): string {
        if( age !== undefined){
            return `Hello, ${name || "world"}`;
        }else{
            return `Hello, ${name}`;
        }
    }
    console.log(hello2(20, "MOON"));
    console.log(hello2(undefined, "MOON"));


    const [text, setText] = useState<string>("")
    const [id, setId] = useState<number>(0)
    const [todo, setTodo] = useState<Item[]>([
        {
            id: 1,
            name:"moon"
        }
    ])
    const ary:number[] = []

    // return 되는것이 없기때문에 void로 사용됨
    // FomeEvent 는 form태그에서 사용하기
    const handleChange = (e : ChangeEvent<HTMLInputElement>):void => {
        setText(e.target.value)
    }

    const clickBtn = () => {
        
    }

    const json = '{"x": 4, "y": 7}'
    const coordinates = JSON.parse(json);
    console.log(coordinates)



    // useState로 관리해 줄 state 의 type 설정
    // interface <typeState>는 컴포넌트 밖에 생성
    const [text2, setText2] = useState<typeState>({
        counter:0,
        name:"moonilyun"
    });

    const onIncrement = ():void => {
        setText2({
            counter: text2.counter + 1
        })
    }
    const onDecrement = ():void => {
        if(text2.counter > 0 ){
            setText2({
                counter: text2.counter - 1
            })
        }
        
    }

    return (  
        <div>
            <input type="text" onChange={handleChange}/>
            {text}
            <button onClick={clickBtn}></button>
            <span>-플러스 마이너스-</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            {text2.counter}
        </div>
    );
}

export default Todo;