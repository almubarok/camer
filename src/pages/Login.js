import {Form, Row,Button,Container,Col} from 'react-bootstrap'
import {useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Login(){
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [errorEmail,setErrorEmail] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleUsername = (e) => {
        const value = e.target.value
        setusername(value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(username).toLowerCase())){
            setErrorEmail(false)
        }else{
            setErrorEmail(true)
        }

    }

    const handleSubmit = (e)=>{
        if(username === "admin@gmail.com" && password === "admin"){
           setisLoggedIn(true)
        }else{
            alert("wrong password")
        }
        e.preventDefault()
    }

    // Klo username === admin@gmail.com & password === admin maka dia redirect ke aplikasi /app
    if(isLoggedIn){
        return <Navigate to="/app" />
    }else{
        return(
            <Container style={{paddingTop:"100px"}}>
                <Row className="justify-content-md-center">
                    <Col xs md={5}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleUsername} />
                            <Form.Text className="text-muted">
                            {errorEmail?<span>Invalid Email.</span>:<span>We'll never share your email with anyone else.</span>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}