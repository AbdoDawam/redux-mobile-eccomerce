import './Home.css'
import Navbar from '../../components/Navbar'
import cartItems from '../../cartItems'
import Product from '../../components/Product'
const Home = () => {
  return (
    <main>
      <Navbar />
      <h2 style={{ marginTop: '1.5rem', textAlign: 'Center' }}>Products</h2>
      <div
        className="products flex"
        style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '50px' }}
      >
        {cartItems.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </main>
  )
}
export default Home
