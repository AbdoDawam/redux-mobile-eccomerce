import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/CartSlice'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div className="product">
      <img src={product.img} alt={product.title} />
      <h4>{product.title}</h4>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  )
}
export default Product
