import { useCart } from "../context/useCart"
import { useNavigate } from "react-router-dom"
import Cart from "./Cart"

function CartContainer() {
    const { cart, clearCart, deleteFromCart } = useCart()
    const navigate = useNavigate()

    return (
        <Cart
            cart={cart}
            clearCart={clearCart}
            deleteFromCart={deleteFromCart}
            goToCheckout={() => navigate('/checkout')}
        />
    )
}

export default CartContainer
