import { CartContext } from './CartContext'
import { useState } from 'react'
import toast from 'react-hot-toast';

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])
    
    const getCartQuantity = () => 
        cart.reduce((acc, current) => acc + current.count, 0)
    
    const addToCart = product => {
        const isInCart = cart.some(item => item.id == product.id)

        if (isInCart) {
            toast.error('El producto ya esta en el carrito')
            return
        }

        setCart([ ... cart, product])
        toast.success('Se agregó el producto al carrito')
        
    }

    const clearCart = () => setCart([])

    const deleteFromCart = product => {
        const updCart = cart.filter(item => item.id != product.id)
        setCart(updCart)
    }

    const getTotal = () => cart.reduce((acc, current) => acc + (current.count*current.price), 0)

    const value = {
        getCartQuantity,
        addToCart,
        cart,
        clearCart,
        getTotal,
        deleteFromCart
    }

    return (
        <CartContext.Provider value= {value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider