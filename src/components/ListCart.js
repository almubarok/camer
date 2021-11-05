import {ListGroup,Row,Col,Badge,Button} from 'react-bootstrap';

export default function ListCart(props){
    const {id, nama,harga,jumlah, handler} = props
    const total = harga*jumlah

    return(
        <ListGroup.Item>
            <Row>
                <Col><Badge bg="primary">{jumlah}</Badge></Col>
                <Col>{nama}</Col>
                <Col>
                    <div>@ Rp. {harga}</div>
                    <div>Rp. {total}</div>
                </Col>
                <Col><Button id={id} variant="secondary" onClick={handler}>Kurangi</Button></Col>
            </Row>
        </ListGroup.Item>
    )
}