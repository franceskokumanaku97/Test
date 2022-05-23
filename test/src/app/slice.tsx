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


export const getLastValuesWheater = createAsyncThunk("api/getLastValuesWeather", async () => {
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Massa&APPID=ad796c22fe5052c58fa2c89e91c13b64`
    )
        .then((res) => res.json())
        .then((data) => {

            console.log("dati", data)
        });

        //setValueWheater
});

export const slice = createSlice({
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
            .addCase(getLastValuesWheater.pending, (state, action) => {
                state.weather = [];
                state.sliceStatus = "pending";
                state.sliceError = null;
            })

            .addCase(getLastValuesWheater.rejected, (state, action) => {
                state.weather = [];
                state.sliceStatus = "error";
                state.sliceError = String(action);
            })
    },
});