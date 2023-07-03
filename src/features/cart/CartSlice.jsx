import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      if (cartItem) {
        cartItem.amount += 1
      } else {
        state.cartItems = [...state.cartItems, payload]
      }
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, { payload }) => {
      const itemId = payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      const itemId = payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount += 1
    },
    decrease: (state, { payload }) => {
      const itemId = payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount -= 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})
export const {
  addToCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions
export default cartSlice.reducer
