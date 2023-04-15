import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import NaverApi from "./NaverApi";


const LostArkApi: FunctionComponent = () => {

    const [apiArray, setApiArray] = useState([]);

    const api = async ():Promise<void> => {
            try{
                const response = await axios.get("http://apis.data.go.kr/1360000/TourStnInfoService1/getCityTourClmIdx1")
                // setApiArray(response.data)
                console.log(response.data)
            }catch(err){

            }
        }

    useEffect(()=>{
        api();
    },[])




    return (  
        <div>
            {
                apiArray.map((a,i)=>(
                    <div>

                    </div>
                ))
            }
        </div>
    );
}

export default LostArkApi;