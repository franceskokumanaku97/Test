import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export type TweatherSlice = {
    city: [];
    weather: [];
    sliceStatus: "ready" | "pending" | "error";
    sliceError: string | null;
};

const initialState: TweatherSlice = {
    city: [],
    weather: [],
    sliceStatus: "pending",
    sliceError: null,
};




export const getLastValuesWheater = createAsyncThunk("get/getLastValuesWeather", async () => {
    //city=${userId}
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Massa&APPID=ad796c22fe5052c58fa2c89e91c13b64`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log("dati slice", data)
            data.json()

        });
    console.log("dati slice", data)
    return data;
    //setValueWheater
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
                console.log("action.payload", action.payload)
                // state.weather = [];
                // state.sliceStatus = "pending";
                // state.sliceError = null;
            })
    },
});

export const weatherCityReducer = weatherCitySlice.reducer;