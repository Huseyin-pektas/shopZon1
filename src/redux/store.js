import { configureStore, createReducer } from '@reduxjs/toolkit'
import CategorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'


export const store = configureStore({
  reducer: {
    categories :CategorySlice,
    products :ProductSlice
  },
})