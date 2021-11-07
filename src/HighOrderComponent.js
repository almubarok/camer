import { Navbar,Container,Nav,NavDropdown, Card, Button } from 'react-bootstrap';
import {useState} from 'react'
import FormRange from 'react-bootstrap/esm/FormRange';

function MyNavbar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// function Profil(props){
//     const {nama, umur, kelas} = props

//     return(
//         <div>
//             <div>Nama : {nama}</div>
//             <div>Umur : {umur}</div>
//             <div>Kelas : {kelas}</div>
//         </div>
//     )
// }

function Produk(props){
    const {id, nama, harga, gambar, dataState, handler} = props
    
    let text="test"

    return (
        <Card style={{ width: '18rem', margin:"10px" }}>
            <Card.Img variant="top" src={gambar} />
            <Card.Body>
                <Card.Title>{nama}</Card.Title>
                <Card.Text>
                {harga}<br/>
                {dataState}
                </Card.Text>
                <Button id={id} variant="primary" onClick={()=>handler(text)}>Beli</Button>
            </Card.Body>
        </Card>
    )
}

function Form(props){
    return(
        <div>
            {props.children}
        </div>
    )
}


export default function Main(){
    const [description, setdescription] = useState("Ini description produk")

    const listProduk=[
        {
            id:1,
            nama:"Oreo",
            harga:500,
            gambar:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.csPt79_rY_AwSnmWd8w5qgHaFn%26pid%3DApi&f=1"
        },
        {
            id:2,
            nama:"Sabun",
            harga:2500,
            gambar:"https://n2.sdlcdn.com/imgs/b/j/w/Lifebuoy-Mild-Care-Soap-Bar-SDL961947582-1-69301.jpg"
        },
        {
            id:3,
            nama:"Shampoo",
            harga:3000,
            gambar:"https://n2.sdlcdn.com/imgs/b/j/w/Lifebuoy-Mild-Care-Soap-Bar-SDL961947582-1-69301.jpg"
        }
    ]

    const handleAlert = (text) => {
        // const id = event.target.id
        alert(text)
    }

    return (
        <div>
            <MyNavbar/>
            {/* <Form id={id} /> */}
            {/* <Form>
                <input type="text"/>
            </Form> */}
            {listProduk.map((product)=><Produk id={product.id} nama={product.nama} harga={product.harga} gambar={product.gambar} dataState={description} handler={handleAlert}/>)}
            Ini Main Component
        </div>
    )
}