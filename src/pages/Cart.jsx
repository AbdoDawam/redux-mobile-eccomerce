import { useDispatch, useSelector } from 'react-redux'
import CartContainer from '../components/CartContainer'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { calculateTotals } from '../features/cart/CartSlice'
import Modal from '../components/Modal'

function Cart() {
  const { isOpen } = useSelector((store) => store.modal)
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default Cart
