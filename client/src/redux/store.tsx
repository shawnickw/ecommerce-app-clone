import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import emailReducer from './emailSlice'
import passwordReducer from './passwordSlice'
import messageReducer from './messageSlice'
import signedReducer from './signedSlice'

export default configureStore({
  reducer: {
    modal: modalReducer,
    email: emailReducer,
    password: passwordReducer,
    message: messageReducer,
    signed: signedReducer,
  },
})