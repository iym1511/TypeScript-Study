import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import NaverApi from "./NaverApi";

const LostArkApi: FunctionComponent = () => {

    const [apiArray, setApiArray] = useState([]);

    const api = async ():Promise<void> => {
            try{
                const response = await axios.get("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyMjM1NTMifQ.TG7Y608ptNtJDKfTm39RlbC-_hQ_Imyk5mLdtp5GmiS9xveSrvsEyHoiThwc1wirRhOZMMXn3hwY_5xtJ3nSmI3k-9OqnLUe40fXiDbyMCSvK8l7r5sy6dX6OWQTuRwm86509UhSm-qgKClX2P3Pjq4t8wvD9-LsjA11SIhwwZ1bv44Iw4GwQ7z_ldUR-DDE5bz3b3euGp9BrwnbUwpN2N80aQoHTdqYWfK0jWL-iM415nSducu3Zts0GYq1h8zZBfNB6_4gBRg2gBkHWi0S5XRIomaqqPKqHgvZFrksxgtUG9B5iraRS4vJFcXHHxpk3kU9ZFpTYaF3h62vDhglIg")
                console.log(response.data)
            }catch(err){

            }
        }

    useEffect(()=>{
        api();
    },[])

    return (  
        <div>

        </div>
    );
}

export default LostArkApi;