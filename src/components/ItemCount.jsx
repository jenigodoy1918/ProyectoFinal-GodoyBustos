import {useState} from 'react'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import toast from 'react-hot-toast'
import "../ItemCount.css"
import { KeyboardReturnSharp } from '@mui/icons-material'


function ItemCount({item}){
    const [counter, setCounter] = useState(1)
    const {addToCart} = useContext(CartContext)

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleRes = () => {
        if (counter == 0) return
        setCounter(counter - 1)
    }
    const handleAddToCart = () => {
        addToCart({ ... item, count: counter})
    }

    return (
        <div className='counter-container text-center'>
            <p className='counter-value'>{counter}</p>
            <div className='d-flex justify-content-center gap-2'>
                <Button onClick={handleAdd} variant='success' className='counter-btn'>Sumar</Button>
                <Button onClick={handleRes} disabled={counter == 1} variant='danger' className='counter-btn'>Restar</Button>
                <Button disabled={counter == 0} onClick={handleAddToCart}>Añadir al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount