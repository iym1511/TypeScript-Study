import { useEffect, useState } from "react";
import axios from "axios";

const URL = "/B552584/";

const NaverApi = () => {


    const [apiData,setApiData] = useState([])

    // searchDate= 에서 newDate 를 사용하여 변수로 넣어서 실시간처럼 바꿔줄수도있음
    const api = async () =>{
        const response = await axios.get('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=2023-04-02&returnType=json&serviceKey=T8f%2Bzud6ZCplc0UNr9TV7YXgtE9csbbJ0hveDrVp1zN74Z8Vo86VCeXCpvQCKD8vyWP6kcTb87sq%2Bt%2F5W%2BXi%2Fw%3D%3D&numOfRows=100&pageNo=1');
        setApiData(response.data.response.body.items);
    }
    console.log(apiData);
    
    
    return ( 
        <div>
            <button onClick={()=>{api()}}></button>
            {
                apiData.map((a: any)=>(
                    <div>
                        <img src={a.imageUrl1} alt="" />
                        <p>{a.informGrade}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default NaverApi;