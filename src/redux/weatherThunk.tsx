import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";


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

interface initialStateType {
    default: string;
    apiData: List[] | null
}

// parmas에 넣어주기 4월 24일에
    let latitude:any = [];
    let longitude:any = [];

const onGeoOkay = (position: any) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    latitude.push(lat);
    longitude.push(lon);
    console.log(latitude);
    console.log(longitude)
}
function onGeoError() {
    alert("I can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);


export const asyncFetch = createAsyncThunk(
    'WeatherSlice/asyncFetch',
    async ():Promise<List[]> => {
        const params: Params = {
            id : "1835847,1841610,1843125,1845106,1845105,1845789,1845788,1841597,1902028,1846265",
            appid :"e524509bbefc6ce7ac50ddf6a1e1b1fb",
            lang : "kr",
            units : "metric",
        };
        const res = await axios.get<WeatherData>("https://api.openweathermap.org/data/2.5/group", {params});
        return res.data.list;
    }
)

const initialState:initialStateType = {
    default: "default",
    apiData: null
}

const WeatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        // 불러오는 로딩
        builder.addCase(asyncFetch.pending, (state): void => {
            state.default = 'loading';
        });
        // 불러왔을 때
        builder.addCase(asyncFetch.fulfilled, (state, action:PayloadAction<List[]>): void => {
            state.apiData = action.payload;
            state.default = 'complete';
        });
        // 불러오기 실패
        builder.addCase(asyncFetch.rejected, (state): void => {
            state.default = 'error';
        });
    },
})

export const { } = WeatherSlice.actions;
export default WeatherSlice.reducer;