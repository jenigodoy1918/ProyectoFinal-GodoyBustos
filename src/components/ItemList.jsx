import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from './Item'

function ItemList ({items}) {
    return(
        <Container className='mt-4'>
            <Row className='g-4'>
                {items.map(item => <Item item={item} key={item.id} />)}
            </Row>
        </Container>
    )
}

export default ItemList