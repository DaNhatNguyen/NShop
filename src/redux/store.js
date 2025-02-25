import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/couterSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store