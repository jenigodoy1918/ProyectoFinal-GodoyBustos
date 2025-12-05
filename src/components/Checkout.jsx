import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useCart} from '../context/useCart'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function Checkout () {
    const {getTotal, cart, clearCart} = useCart()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            buyer: { email, name, phone},
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }

        const ok = await createOrder(order)
            toast.success('Pedido realizado! Gracias por tu compra')
            clearCart()
            navigate('/')
        
    }

    return (
        <div className='d-flex justify-content-center'>
            <form className='mt-5 border p-3 rounded w-50' onSubmit={handleSubmit}>
                <p className='fw-bold'>Necesitamos los siguientes datos para finalizar la compra:</p>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' required />
                    <Form.Text className='text-muted'>
                        Nunca compartiremos tu email.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type='text' placeholder='Jenifer Godoy' required/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='phone'>
                    <Form.Label>Número de Celular</Form.Label>
                    <Form.Control type='text' placeholder='3518007065' required/>
                </Form.Group>

                <Button variant="dark" type='submit' className='w-100'>Finalizar Compra</Button>
            </form>
        </div>
    )
}

export default Checkout