import { createSlice } from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
    name: 'password',
    initialState: {
        value: "",
    },
    reducers: {
        setPassword: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setPassword } = passwordSlice.actions
export default passwordSlice.reducer