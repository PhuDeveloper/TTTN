import { createSlice } from "@reduxjs/toolkit";
export const AccountReducer = createSlice({

    name: 'account',
    initialState: {
        account: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListStationStart: (state, action) => {
        },
    }
})
export const {
    getListStationStart
} = AccountReducer.actions
export default AccountReducer.reducer