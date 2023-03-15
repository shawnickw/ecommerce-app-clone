import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: false,
    },
    reducers: {
        setTrue: (state) => {
            state.value = true
        },
        setFalse: (state) => {
            state.value = false
        },
    },
})

export const { setTrue, setFalse } = modalSlice.actions
export default modalSlice.reducer