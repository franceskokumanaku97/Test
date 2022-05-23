import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { useDispatch } from 'react-redux';
import moment from "moment";

export type IlistTemPerH = {
    date: string;
    icon: string;
    temp: string;
};

export type IWeather = {
    date: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
    temp: string;
    listTemPerH: IlistTemPerH[];
};


export type TweatherSlice = {
    city: [];
    weather: IWeather[] | null;
    sliceStatus: "ready" | "pending" | "error";
    sliceError: string | null;
};

const initialState: TweatherSlice = {
    city: [],
    weather: [],
    sliceStatus: "pending",
    sliceError: null,
};




export const getLastValuesWheater = createAsyncThunk("get/getLastValuesWeather", async (city: string) => {
    //city=${userId}
    console.log("qua")
    try {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=ad796c22fe5052c58fa2c89e91c13b64&units=metric`
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
        setLastValues: (state, action) => {
            try {
                state.weather = action.payload.results;
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
                console.log("data.json", action.payload)
                state.weather?.push({
                    "date": moment(new Date()).format("ddd DD, MMM"),
                    "name": action.payload.city.name,
                    "description": action.payload.list[0].weather[0].description,
                    "icon": action.payload.list[0].weather[0].icon,
                    "active": action.payload.city.name === "Bologna" ? false : true,
                    "temp": String(Math.round(action.payload.list[0].main.temp)) + "°",
                    "listTemPerH": action.payload.list.map((el: any, idx: number) => {
                        return {
                            "date": el.dt_txt,
                            "icon": el.weather[0].icon,
                            "temp": String(Math.round(el.main.temp)) + "°",
                        }
                    }),
                })
            })
    },
});

export const selectAllWeatherCity = createSelector((state: RootState) => state.weatherCity,
    (cH) => cH.weather)

export const weatherCityReducer = weatherCitySlice.reducer;