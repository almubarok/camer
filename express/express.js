const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

// POST method route
app.post('/login', function (req, res) {
    const {username, password} = req.body

    if(username==="admin" && password==="12345"){
        res.json({ token: 'abx1238s1238128937lkas98712mlkasld91' })
    }else{
        res.send('Wrong Password')
    }
    console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})