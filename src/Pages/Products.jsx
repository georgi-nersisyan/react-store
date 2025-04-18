import React, { useContext, useEffect, useReducer, useState } from 'react'
import ProductCart from '../components/ProductCart';
import { productsReducer } from '../ProductsReducer';
import CartContext from '../CartContext';

function Products() {
    const [data, setData] = useState([]);  
    const { dispatch } = useContext(CartContext);

    useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setData(data.products));
    }, []);

    const addProduct = (prod) => {
      dispatch({type:"ADD", payload:prod});
    }
  
  return (
    <div className='flex gap-7 p-8 flex-wrap'>
      {
        data.map((prod) => {
           return <ProductCart key={prod.id} product={prod} maxLengthDes={100} maxLengthTit={10} productAdd={addProduct} />
        })
      }
    </div>
  )
}

export default Products;