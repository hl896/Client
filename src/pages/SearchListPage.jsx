import React  from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import SearchList from "../components/SearchList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import  {mobile}  from "../responsive";
import { useLocation } from 'react-router';
import { useState } from 'react';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;


const SearchListPage = () => {
    const location = useLocation()
    const searchContent = location.pathname.split("/")[3];
    console.log("location.pathname:",location.pathname)
    
    console.log("location:", location)
    console.log("searchContent:", searchContent)

    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title>{searchContent}</Title>
            <SearchList searchContent={searchContent}  />
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default SearchListPage;