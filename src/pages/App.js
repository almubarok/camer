import {useState} from 'react'

import Navbar from '../components/Navbar';
import Product from '../components/Product';
import ListCart from '../components/ListCart';


import { Row,Container,Col,ListGroup } from 'react-bootstrap';


function App() {
  const [listCart, setlistCart] = useState([])
  const [search, setSearch] = useState("")

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
    const {id} = e.target

    // Find jumlah produk saat ini
    const productInCart = listCart.find(element => element.id === parseInt(id));

    if(productInCart.jumlah ===1){
      const hasil = listCart.filter((product)=>{
        if(product.id !== parseInt(id)){
          return true
        }else{
          return false
        }
      })
      setlistCart(hasil)
    }else{
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
  }

  const handleSearch =(e)=>{
    const value = e.target.value
    setSearch(value)
  }

  console.log("State list cart", listCart)

  const totalHarga = listCart.reduce((prev,current)=>{
    const total=current.jumlah*current.harga
    return prev+total
  },0)

  const totalDiskon = listCart.reduce((prev,current)=>{
    let total = 0
      // Jika jumlah lebih dari 2 dia mendapatkan diskon 10%, rumusnya harga*jumlah*0.9
      if(current.jumlah>2){
        total = current.harga*current.jumlah*0.9
      }else{
        total=current.jumlah*current.harga
      }
      return prev+total
  },0)
  
  return (
    <div className="App">
      <Navbar handler={handleSearch}/>
      <Container >
        <Row>
          <Col xs={8}>
            <Row>
            {search?
            listProduk.filter((produk)=>{
              if(produk.nama.toLowerCase().includes(search.toLowerCase())){
                return true
              }else{
                return false
              }
            }).map((produk)=>{
              return <Product id={produk.id} nama={produk.nama} harga={produk.harga} gambar={produk.gambar} handler={handleAddCart}/>
            })
            :
            listProduk.map((produk)=>{
              return <Product id={produk.id} nama={produk.nama} harga={produk.harga} gambar={produk.gambar} handler={handleAddCart}/>
            })}
            </Row>
          </Col>
          <Col xs={4}>
          <ListGroup>
            {listCart.map((produk)=>{
              return <ListCart id={produk.id} nama={produk.nama} harga={produk.harga} jumlah={produk.jumlah} handler={handleKurangi}/>
            })}
            <ListGroup.Item>
              <Row>
                <Col xs={6}>
                Total : {totalHarga === totalDiskon ? <span>Rp. {totalHarga}</span>:<span style={{textDecoration:"line-through"}}>Rp. {totalHarga}</span>}
                </Col>
                <Col xs={6}>
                  Jumlah Barang : {listCart.reduce((prev,current)=>{
                    const jumlah = current.jumlah
                    return prev + jumlah
                  },0)}
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  {totalHarga !== totalDiskon ? <span>Diskon : Rp. {totalDiskon} </span>: null}
                </Col>
              </Row>
              <br/><br/><br/>
              <ListGroup.Item>
                Untuk pembelian 3 pieces produk yang sama, akan mendapat diskon 10%.
              </ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
