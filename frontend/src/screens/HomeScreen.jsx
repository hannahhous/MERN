import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react'
import {Row, Col} from "react-bootstrap"
import Product from '../components/Product'
import products from '../products'


const HomeScreen = () => {
  /*
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

    //console.log("PLEASE")
     //const { data } = await axios.get('/api/products');
     //console.log(data);
     try {
      const { data } = await axios.get('http://localhost:3000/api/products');
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);

    }

      //setProducts(data);
    };
    fetchProducts();
  }, []);*/

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            )) }
        </Row>
    </>
  )
}

export default HomeScreen