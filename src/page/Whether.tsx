import axios, { AxiosResponse } from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { asyncFetch } from "../redux/weatherThunk";

interface Coord {
    lon: number;
    lat: number;
  }
  
  interface Sys {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  interface Wind {
    speed: number;
    deg: number;
  }
  
  interface Clouds {
    all: number;
  }
  
  interface List {
    coord: Coord;
    sys: Sys;
    weather: Weather[];
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    id: number;
    name: string;
}

interface WeatherData {
    cnt: number;
    list: List[];
}

    interface Params {
    id: string;
    appid: string;
    lang: string;
    units: string;
}

const Whether:FunctionComponent = () => {

    const WeatherStatus = useAppSelector((state)=> state.weather.default);
    const WeatherData = useAppSelector((state)=> {return state.weather.apiData});

    const dispatch = useAppDispatch();

    const WeatherThunk = () => {
        dispatch(asyncFetch());
    }

    console.log(WeatherData);
    const [weatherApi, setWeatherApi] = useState<List[]>([]);

    // return이 axios.get 일때 AxiosResponse 타입도 같이 지정해줘야 한다.
    const api = async():Promise<AxiosResponse<WeatherData>> => {
        const params: Params = {
            id : "1835847,1841610,1843125,1845106,1845105,1845789,1845788,1841597,1902028,1846265",
            appid :"e524509bbefc6ce7ac50ddf6a1e1b1fb",
            lang : "kr",
            units : "metric",
        };
        const res = await axios.get<WeatherData>("https://api.openweathermap.org/data/2.5/group", {params});
        return res;
    }


    useEffect(() => {
        const apiData = async ():Promise<void> => {
            const res = await api();
            setWeatherApi(res.data.list);
            console.log(res.data);
        };
        apiData();
    }, []);

    useEffect(()=>{
        WeatherThunk();
    },[])


    const onGeoOkay = (position: any) => {
        console.log(position);
    }

    function onGeoError() {
        alert("I can't find you. No weather for you.");
    }

    navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);




    return (  
        <div>
            <h1>날씨 api Test</h1>
            {
                weatherApi.map((a)=>(
                    <div>
                        {a.name}
                    </div>
                ))
            }
            <h1>날씨 api redux-thunk</h1>
            {WeatherStatus}
            {   WeatherData &&
                WeatherData.map((a:List)=>(
                    <div>
                        {a.name}
                    </div>
                ))
            }
        </div>
    );
}

export default Whether;