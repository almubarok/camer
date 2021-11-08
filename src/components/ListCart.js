import {ListGroup,Row,Col,Badge,Button} from 'react-bootstrap';

export default function ListCart(props){
    const {id, nama,harga,jumlah, handler} = props
    const total = harga*jumlah
    const discount = jumlah>2?harga*jumlah*0.9:harga*jumlah

    return(
        <ListGroup.Item>
            <Row>
                <Col xs={1}><Badge bg="primary">{jumlah}</Badge></Col>
                <Col xs={3}>{nama}</Col>
                <Col xs={5}>
                    <div>@ Rp. {harga}</div>
                    {jumlah>2?<div style={{textDecoration:"line-through"}}>Rp. {total}</div>:<div >Rp. {total}</div>}
                </Col>
                <Col xs={3}><Button id={id} variant="secondary" onClick={handler}>Kurangi</Button></Col>
            </Row>
            {jumlah>2?(
            <Row>
                <Col xs={4}>Diskon (10%)</Col>
                <Col xs={8}>Rp. {discount}</Col>
            </Row>):null}

        </ListGroup.Item>
    )
}