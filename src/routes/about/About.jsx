import styles from './About.module.css'
import CartItem from '../../components/CartItem/CartItem'
import { useOutletContext, Link } from 'react-router-dom'

const About = () => {
  const cartItems = []
  // const { cartItems, setCartItems } = useOutletContext()

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>About me</h2>
      {cartItems.length === 0 ? (
        <div className={styles.status}>
          <h3>Nothing to see here</h3>
          <Link to={'/'}>
            <button>Home</button>
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          <div className={styles.checkout}>
            <button className={styles.btn}>Home</button>
          </div>
        </>
      )}
    </section>
  )
}
export default About
