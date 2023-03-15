import { createSlice } from "@reduxjs/toolkit";

export const signedSlice = createSlice({
    name: 'signed',
    initialState: {
        value: false,
    },
    reducers: {
        setSignedIn: (state) => {
            state.value = true
        },
        setSignedOff: (state) => {
            state.value = false
        },
    },
})

export const { setSignedIn, setSignedOff } = signedSlice.actions
export default signedSlice.reducer