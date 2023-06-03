import React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sorts}) => {
  console.log(cat, filters, sorts);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(()=>{
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
          ? `http://ec2-3-25-66-199.ap-southeast-2.compute.amazonaws.com:5000/api/products?category=${cat}`
          : "http://ec2-3-25-66-199.ap-southeast-2.compute.amazonaws.com:5000/api/products"
          )
        
          setProducts(res.data);
          console.log(res.data)
      } catch (error) {
        console.log("error:", error)
      }

    };
    getProducts();
  },[cat])

  useEffect(()=>{
    cat && 
      setFilteredProducts(
        products.filter((item)=>
          Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
          )
        )
      )

  },[products,cat,filters])

  useEffect(()=>{
    if((sorts === "newest")){
      console.log("newest filteredProducts:",filteredProducts)
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      );
    }else if((sorts==="asc") ) {
      console.log(" asc filteredProducts:",filteredProducts)

      setFilteredProducts((prev) => 
        [...prev].sort((a,b)=> a.price - b.price)
      );
    }else {
      console.log("desc filteredProducts:",filteredProducts)

      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price)
      );
    }
  }, [sorts])

  return (
    <Container>
      {cat
        ?
        console.log("filteredProducts:",filteredProducts)
        :console.log("products:",products)}
      {cat? filteredProducts.map((item) => <Product item={item} key={item.id} />)
      : products
          .slice(0,8)
          .map((item) => <Product item={item} key={item.id} />)}
      {/* {products.map((item)=>(
        <Product item={item} key={item.id} />
      ))} */}
    </Container>
  );
};

export default Products;