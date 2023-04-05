import { useEffect, useState } from "react";
import axios from "axios";

interface apiType{
    actionKnack : null;
    dataTime : string;
    imageUrl1 : string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
    imageUrl5: string;
    imageUrl6: string;
    informCause: string;
    informCode: string;
    informData: string;
    informGrade: string;
    informOverall: string;
}



interface testType {
    id:number;
    name: string;
}

const NaverApi = () => {
    
    const [apiData,setApiData] = useState<apiType[]>([])

    // searchDate= 에서 newDate 를 사용하여 변수로 넣어서 실시간처럼 바꿔줄수도있음 a
    // const api = async (): Promise<void> =>{
    //     try{
    //         const response = await axios.get('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=2023-04-04&returnType=json&serviceKey=T8f%2Bzud6ZCplc0UNr9TV7YXgtE9csbbJ0hveDrVp1zN74Z8Vo86VCeXCpvQCKD8vyWP6kcTb87sq%2Bt%2F5W%2BXi%2Fw%3D%3D&numOfRows=100&pageNo=1');
    //         setApiData(response.data.response.body.items);
    //     } catch(error) {
    //         alert("Error")
    //     }
    // }
    // console.log(apiData);

    // const api = async (): Promise<void> =>{
    //     try{
    //         const response = await axios.get('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=100&returnType=json&serviceKey=T8f%2Bzud6ZCplc0UNr9TV7YXgtE9csbbJ0hveDrVp1zN74Z8Vo86VCeXCpvQCKD8vyWP6kcTb87sq%2Bt%2F5W%2BXi%2Fw%3D%3D&numOfRows=100&pageNo=1&ver=1.0');
    //         setApiData(response.data.response.body.items);
    //         console.log(response)
    //     } catch(error) {
    //         alert("Error")
    //     }

    // }
    // console.log(apiData);
    
    // useEffect(()=>{
    //     api()
    // },[]);
    
    console.log(apiData.filter((a)=>{a.informData.includes("2")}))

    const asd = apiData.filter((a)=>{a.dataTime.includes("23")})

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
        // console.log(array1)
        // console.log(array1.map((a)=>a.name))
    }

    useEffect(()=>{
        console.log(array1)
    })


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
                // apiData.map((a :apiType)=>(
                //     <div style={{border:"1px solid red"}}>
                //         {/* <img src={a.imageUrl1} alt="" /> */}
                //         <p>{a.dataTime}</p>
                //         <p>{a.informGrade}</p>
                //     </div>
                // ))
            }

        </div>
    );
}

export default NaverApi;