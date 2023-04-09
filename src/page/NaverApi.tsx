// 타입에선 React 임포트 해줘야함
import React, { FunctionComponent, useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

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


interface testType {
    id:number;
    name: string;
}

type study = {
    id:number;
    name:string;
    check?:boolean;
}


// Error 기본타입적어준것
// interface CustomError{
//     name: string;
//     message: string;
//     stack?: string;
//     response? : { 
//         data: any;
//     }
// }


// 에러타입 상속받음
class CustomError extends Error {
    response? : { 
        data: any;
    }
}

interface zxc {
    [key :string] : number | string
}

interface zxcs {
    dog: string;
    cat: string;
    koala: string;
}

const NaverApi: FunctionComponent = () => {

    const [zxc, setZxc] = useState<zxc[]>([
        {
            dog: "1",
            cat: 'moon',
        }
    ])
    
    const [test, setTest] = useState<study[]>([
        {
            id:1,
            name:"MOON",
        }
    ])

    useEffect(()=>(
        [1,2,"3"].forEach((a)=> {console.log(a)})
    ),[])

    
    
    // interface Post {
        //     response: {
            //       body: {
                //         items: string[];
                //       };
                //     };
                //   }


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
    
    // 아래에서 items까지 접근해서 state에 setState해줬기 때문에 
    // state에서 사용해줄 items타입을 지정해서 state에 먹여주고
    const [apiData,setApiData] = useState<apiType[]>([])
        
    // 미리 만들어준 items를 제외한 나머지 타입을 지정해서 axios.get에다가 타입을 지정해준다
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


    // searchDate= 에서 newDate 를 사용하여 변수로 넣어서 실시간처럼 바꿔줄수도있음 a
    const api = async (): Promise<void> =>{
        try{                                    // AxiosResponse<> = any로 뜨는게 싫을때? 사용
            const response = await axios.get<Post, AxiosResponse<Post>>('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=2023-04-08&returnType=json&serviceKey=T8f%2Bzud6ZCplc0UNr9TV7YXgtE9csbbJ0hveDrVp1zN74Z8Vo86VCeXCpvQCKD8vyWP6kcTb87sq%2Bt%2F5W%2BXi%2Fw%3D%3D&numOfRows=100&pageNo=1');
            setApiData(response.data.response.body.items);
            console.log(response.data)
        } catch(err) {
            if(axios.isAxiosError(err)){ // 커스텀 타입가드
                console.error((err as AxiosError<{message: string}>).response?.data.message);
            }
            alert("Error")
        }
    }
    console.log(apiData);


    
    useEffect(()=>{
        api()
    },[]);
    
    // console.log(apiData.filter((a)=>{a.informData.includes("2")}))

    const asd = apiData.filter((a :apiType)=>{a.dataTime.includes("23")})

    console.log(apiData.map((a)=> a.informGrade));

    let numPlus = 0;

    const [testArray, setTestArray] = useState<testType>(
        {
            id: numPlus,
            name: "asd"
        }
    )


    const [array1, setArray1] = useState<testType[]>([
        {
            id:0,
            name:"test1"
        }
    ])

    const qwe = (): void => {
        numPlus++
        array1.push(
            {
                id: numPlus,
                name: "asds"
            }
        );
        console.log(array1)
        console.log(array1.map((a)=>a.name))
    }

    useEffect(()=>{
        console.log(array1)
    })

    // 테스트용
    interface tsx {
        (x: number, y: number): number 
    }

    const test2: tsx = (x,y) => {
        return x+y
    }
    test2(1,2)

    

    return ( 
        <div>
            <button onClick={qwe}>asdads</button>
            
            {
                array1.map((a :testType) : any =>(
                    <div style={{border:"1px solid red"}}>
                        <p>{a.name}</p>
                        <p>{a.id}</p>
                    </div>
                ))
            }

            
            {/* {
                array1.slice(array1.length-3).map((a)=>(
                    <div>
                        <p>{a.name}</p>
                    </div>
                ))
            } */}

            {
                apiData.map((a :apiType)=>(
                    <div style={{border:"1px solid red"}}>
                        {/* <img src={a.imageUrl1} alt="" /> */}
                        <p>{a.dataTime}</p>
                        <p>{a.informGrade}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default NaverApi;