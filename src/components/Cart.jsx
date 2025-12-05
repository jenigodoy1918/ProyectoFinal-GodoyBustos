import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import EmptyCart from './EmptyCart'

function CartView({ cart, clearCart, deleteFromCart, goToCheckout }) {
    if (cart.length < 1) return <EmptyCart />

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h3 className="mb-4 fw-bold">Tu Carrito</h3>

            <ListGroup className="w-75 shadow-sm">
                {cart.map(prod => (
                    <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center py-3">
                        <div className="d-flex align-items-center gap-3">
                            <Image src={prod.image} width={80} height={80} rounded style={{ objectFit: 'cover' }} />
                            <div>
                                <p className="m-0 fw-semibold">{prod.title}</p>
                                <small className="text-muted">Cantidad: {prod.count}</small>
                            </div>
                        </div>

                        <Button variant="outline-danger" size="sm" 
                            onClick={() => deleteFromCart(prod)}>
                            Eliminar
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <div className="d-flex flex-column w-75 mt-4">
                <Button className="mb-3" variant="danger" onClick={clearCart}>
                    Vaciar Carrito
                </Button>

                <Button variant="success" onClick={goToCheckout}>
                    Ir a Checkout
                </Button>
            </div>
        </div>
    )
}

export default CartView
