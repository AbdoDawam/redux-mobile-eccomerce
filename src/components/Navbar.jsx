import { Link } from 'react-router-dom'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/cart">
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
