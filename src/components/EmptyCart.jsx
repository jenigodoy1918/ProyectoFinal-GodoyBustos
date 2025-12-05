import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function EmptyCart() {
    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <h2>No se encontraron productos en el carrito</h2>
            <Button as={Link} to='/' className='w-50' style={{backgroundColor: '#dd0e80', borderColor: '#dd0e80'}}>Ver Productos</Button>
        </div>
    )
}

export default EmptyCart