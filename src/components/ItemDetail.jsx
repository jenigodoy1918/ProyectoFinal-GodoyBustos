import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ItemCount from './ItemCount'
import "../ItemDetail.css";

function ItemDetail ({item}){
    return(
        <Container className='item-detail-container'>
            <Row className='align-items-center'> 
                <Col md={6}>
                    <h2 className='item-title'>{item?.title}</h2>
                    <p className='item-price'>${item?.price}</p>
                    <ItemCount item={item}/>
                </Col>
                <Col md={6} className='text-center'>
                    <Image src={item?.image} alt={item?.title} fluid rounded className='item-image'/>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail