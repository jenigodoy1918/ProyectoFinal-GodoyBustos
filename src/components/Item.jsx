import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'

function Item ({item}) {
    const navigate = useNavigate()

    return(
        <Col lg={3} sm={6} xs={12}>
            <Card className='h-100 shadow-sm mb-4 mt-4'>
                <Card.Img variant='top' src={item.image} style={{ objectFit: 'cover', height: '200px' }}/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='fw-bold'>
                        {item.title}
                    </Card.Title>
                    <Button variant='light'
                    onClick={() => navigate(`/item/${item.id}`)} className='mt-auto w-100'>
                        Ver más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item