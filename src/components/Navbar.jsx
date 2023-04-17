import React, { useState } from 'react';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, Navigate,
  useNavigate
} from "react-router-dom";
import { logoff, searchProducts } from '../redux/apiCalls';
import Login from '../pages/Login'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  margin-bottom:20px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const [searchContent, setSearchContent] = useState('');
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector((state)=> state.user.currentUser);
  const dispatch = useDispatch();
  console.log("NAV Bar user:", user)
  console.log("quantity:", quantity)
  const navigate = useNavigate()

  const gotoLogin = async (e) => {
    e.preventDefault();
    navigate("/login")
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    logoff(dispatch)
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    navigate("/register")
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    searchProducts(e.target.value, dispatch)
  } 
  const handleSearchContent = async (e) => {
    e.preventDefault();
    setSearchContent(e.target.value);
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input onChange={handleSearchContent} name='searchContent' placeholder="Search" />
            {
              searchContent ? 
              <Link to={`/products/search/${searchContent}`}>
                <Search style={{ color: "gray", fontSize: 16 }} />
              </Link>  :
              <Search style={{ color: "gray", fontSize: 16 }} />
            }
          </SearchContainer>
        </Left>
        <Center>
          <Link to={`/`} >
          <Logo>HY.</Logo>
          </Link> 
          <br />

        </Center>
        <Right>
          
          {user ? 
            <MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>: 
            <>
              <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
              <MenuItem onClick={gotoLogin} >SIGN IN</MenuItem>
            </>
          }
          
          <Link to="/cart" >
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;