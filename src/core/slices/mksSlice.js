import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    longitude: 0,
    latitude: 0,
    markerLocation:[],
    members: [],
    loading: false
}

export default createSlice({
    name: 'MKS',
    initialState,
    reducers:{
        setMembers: (state,action) => {
            state.members = action.payload;
        },
        setMksLongitude: (state,action) => {
            state.longitude = action.payload;
        },
        setMksLatitude: (state,action) => {
            state.latitude = action.payload;
        },
    }
})
