import { createSlice } from "@reduxjs/toolkit";
export const WorkReducer = createSlice({

    name: 'work',
    initialState: {
        work: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListStationSuccess: (state, action) => {           
        },

    }
})
export const {
    getListStationSuccess
} = WorkReducer.actions
export default WorkReducer.reducer