import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchItem from './SearchItem';
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;


const SearchList = ({searchContent}) => {
    const [products, setProducts] = useState([]);
 
    useEffect(()=>{
        const searchContents = async () => {
            try {
                console.log("searchContent:", searchContent)
                const res = await axios.get(
                    `https://nodejsapiforlhy.herokuapp.com/api/products/search?title=${searchContent}`
                )

                setProducts(res.data);
                console.log(res.data);
            } catch (error) {
                console.log("error:", error)
            }
        };
        searchContents();
    },[searchContent])



    return(
        <Container>
            {products&&
                products.map((item)=>
                    <SearchItem item={item} key={item._id} />
                )
            }
        </Container>
    )
}



export default SearchList;