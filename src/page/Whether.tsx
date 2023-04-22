import axios, { AxiosResponse } from "axios";
import { FunctionComponent, useEffect, useState } from "react";

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
  
  interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
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

    const [weatherApi, setWeatherApi] = useState<List[]>([]);

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

    const weather = async():Promise<void> => {
        const res = await api();
        setWeatherApi(res.data.list);
        console.log(res.data);
    }

    


    return (  
        <div>
            <button onClick={weather}>날씨api</button>
            {
                weatherApi.map((a: any)=>(
                    <div>
                        
                    </div>
                ))
            }
        </div>
    );
}

export default Whether;