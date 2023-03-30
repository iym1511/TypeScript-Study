import { useState } from "react";

const Test = () => {

    

    let age:number = 30;

    const [num, setNum] = useState<number>(1)
    const [asd, setAsd] = useState<[number,string]>([1,"asd"])

    let testMap:number[] = [1,2,3,4];

    const plusMap = (a:number) =>  {
        setNum(num+a)
    }

    return (  
        <div>
            <p>{age}</p>
            {
                testMap.map((a)=>(
                    <div>
                        <p>{a}</p>
                        <button onClick={()=>{plusMap(a)}}></button>
                    </div>
                ))
            }
            <p>{num}</p>
        </div>
    );
}
 
export default Test;