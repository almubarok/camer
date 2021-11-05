import {useState} from 'react'

import Navbar from './components/Navbar';
import Product from './components/Product';
import ListCart from './components/ListCart';


import { Row,Container,Col,ListGroup } from 'react-bootstrap';


function App() {
  const [listCart, setlistCart] = useState([])

  const listProduk =[
    {
      id:1,
      nama: "Baju",
      harga:10000,
      gambar:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-11696422/no_brand_imj_rani_baju_atasan_wanita_terbaru_blouse_korean_style_blouse_wanita_lengan_panjang_import_full01_pp5uwg7f.jpg"
    },
    {
      id:2,
      nama: "Jaket",
      harga:15000,
      gambar:"https://s1.bukalapak.com/img/16576211322/large/data.jpeg"
    },
    {
      id:3,
      nama: "Celana",
      harga:10000,
      gambar:"https://id-live-05.slatic.net/p/a7e468485145a931edf3825190fe2a0e.jpg_720x720q80.jpg_.webp"
    },
    {
      id:4,
      nama: "Topi",
      harga:5000,
      gambar:"https://www.jakartanotebook.com/images/products/72/1020/39060/2/topi-flat-top-komando-model-venture-py-d10187-black-1.jpg"
    },
    {
      id:5,
      nama: "Kemeja",
      harga:15000,
      gambar:"https://s1.bukalapak.com/img/15110891061/large/data.png"
    }
  ]

  const handleAddCart=(e)=>{
    const {id} = e.target

    // ==  comparasi nilai saja
    // === comparasi nilai dan type data
    const hasil = listProduk.find(element => element.id === parseInt(id));

    // Check existing cart
    const checkID = listCart.find(element => element.id === parseInt(id));
    // checkId jika id = 1
    // {
    //   id:1,
    //   nama: "Baju",
    //   harga:10000,
    //   jumlah:1
    // },

    // listCart
    // [
    // {
    //   id:1,
    //   nama: "Baju",
    //   harga:10000,
    //   jumlah:28
    // },
    // {
    //   id:2,
    //   nama: "Jaket",
    //   harga:10000,
    //   jumlah:1
    // },
    // {
    //   id:3,
    //   nama: "Celan",
    //   harga:10000,
    //   jumlah:1
    // },
    // ]


    if(checkID===undefined){
      setlistCart([...listCart, {...hasil,jumlah:1}])
    }else{   
      const newListCart = listCart.map((cart)=>{
        if(checkID.id===cart.id){
          cart.jumlah=cart.jumlah+1
          return cart
        }else{
          return cart
        }
      })
      setlistCart(newListCart)
    }
    
    // return
    // id=1
    // {
    //   id:1,
    //   nama: "Baju",
    //   harga:10000,
    //   gambar:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-11696422/no_brand_imj_rani_baju_atasan_wanita_terbaru_blouse_korean_style_blouse_wanita_lengan_panjang_import_full01_pp5uwg7f.jpg"
    // },

  }

  const handleKurangi=(e)=>{
    const {id} =e.target

    const newListCart = listCart.map((cart)=>{
      if(parseInt(id)===cart.id){
        cart.jumlah=cart.jumlah-1
        return cart
      }else{
        return cart
      }
    })
    setlistCart(newListCart)
  }
  
  return (
    <div className="App">
      <Navbar/>
      <Container >
        <Row>
          <Col xs={8}>
            <Row>
            {listProduk.map((produk)=>{
              return <Product id={produk.id} nama={produk.nama} harga={produk.harga} gambar={produk.gambar} handler={handleAddCart}/>
            })}
            </Row>
          </Col>
          <Col xs={4}>
          <ListGroup>
            {listCart.map((produk)=>{
              return <ListCart id={produk.id} nama={produk.nama} harga={produk.harga} jumlah={produk.jumlah} handler={handleKurangi}/>
            })}
            <ListGroup.Item>Total : {listCart.reduce((prev,current)=>{
              const total=current.jumlah*current.harga
              return prev+total
            },0)} </ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
