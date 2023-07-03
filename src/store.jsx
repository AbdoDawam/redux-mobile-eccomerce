import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './features/cart/CartSlice'
import ModalReducer from './features/modal/modalSlice'
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
  },
})
