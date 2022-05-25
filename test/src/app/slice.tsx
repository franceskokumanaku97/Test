import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from "./store";

export type IlistTemPerH = {
    date: string;
    icon: string;
    temp: string;
};

export type ICity = {
    code?: number;
    label: string;
    active: boolean;
    lat ?:string;
    lon?:string;
}

export type IWeather = {
    date: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
    temp: string;
    listTemPerH: IlistTemPerH[];
    wind: string;
    temp_max: string;
    temp_min: string;
    humidity: string;
    uv: string;
    dewPoint: string;

};


export type TweatherSlice = {
    city: ICity[];
    weather: IWeather[] | null;
    sliceStatus: "ready" | "pending" | "error";
    sliceError: string | null;
};

const initialState: TweatherSlice = {
    city: [
    { code: 1, label: "Milano",lat:"40.68",lon:"34.20", active: true },
    { code: 3, label: "Bologna",lat:"44.49",lon:"11.34", active: false }],
    weather: [],
    sliceStatus: "pending",
    sliceError: null,
};




export const getLastValuesWheater = createAsyncThunk("get/getLastValuesWeather", async (cord:any) => {
    //city=${userId}
  
    try {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${cord.lat}&lon=${cord.long}&APPID=ad796c22fe5052c58fa2c89e91c13b64&units=metric`
        )
        return data.json();
    } catch (err) {
        return err;
    }

});

export const weatherCitySlice = createSlice({
    name: "weatherCity",
    initialState,
    reducers: {
        addCity:(state,action)=>{
         
            state.city.push(action.payload)
        },
        setLastValues: (state, action) => {
            try {
                state.weather = action.payload;
                state.sliceStatus = "ready";
                state.sliceError = null;
            } catch (e) {
                state.weather = [];
                state.sliceStatus = "error";
                state.sliceError = String(e);
            }
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getLastValuesWheater.fulfilled, (state, action) => {
            
                state.weather?.push({
                    "date": moment(new Date()).format("ddd DD, MMM"),
                    "name": action.payload.city.name,
                    "description": action.payload.list[0].weather[0].description,
                    "icon": action.payload.list[0].weather[0].icon,
                    "active": action.payload.city.name === "Bologna" ? true : false,
                    "temp": String(Math.round(action.payload.list[0].main.temp)) + "°",
                    "listTemPerH": action.payload.list.map((el: any, idx: number) => {
                        return {
                            "date": el.dt_txt,
                            "icon": el.weather[0].icon,
                            "temp": String(Math.round(el.main.temp)) + "°",
                        }

                    }),
                    "wind": action.payload.list[0].wind.speed,
                    "temp_max": String(Math.round(action.payload.list[0].main.temp_max)) + "°",
                    "temp_min": String(Math.round(action.payload.list[0].main.temp_min)) + "°",
                    "humidity": action.payload.list[0].main.humidity,
                    "uv": "3",
                    "dewPoint": "3°C",
                })
            })
            .addCase(getLastValuesWheater.rejected, (state, action) => {
                state.sliceError = action.error.message || null
            })
    },
});

export const selectAllWeatherCity = createSelector((state: RootState) => state.weatherCity,
    (cH) => cH.weather);

    export const selectDayWeather = createSelector((state: RootState) => state.weatherCity,
    (cH) => cH.weather?.find((el)=> el.active===true) || null);

export const selectCity = createSelector((state: RootState) => state.weatherCity,
    (cH) => cH.city);

export const selectError = createSelector((state: RootState) => state.weatherCity,
    (cH) => cH.sliceError)

export const weatherCityReducer = weatherCitySlice.reducer;