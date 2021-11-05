import { Card,Button,Col } from 'react-bootstrap';


export default function Product(props){
    const {id, nama, harga, gambar, handler} = props
    return(
        <Col xs={4}>
            <Card style={{ margin: '10px' }}>
                <Card.Img variant="top" height="200" src={gambar} />
                <Card.Body>
                    <Card.Title>{nama}</Card.Title>
                    <Card.Text>
                    Harga : {harga}
                    </Card.Text>
                    <Button id={id} variant="primary" onClick={handler}>Masukkan Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}