import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home/Home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/CartSlice'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  )
}
export default App
