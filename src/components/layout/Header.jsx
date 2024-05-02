import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { BsCartPlusFill  } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@/store/product'
import { userLogout, userLogin } from '@/store/member'
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { FaUserTimes } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const HeaderBlock = styled.div`
  .header__wrap{
  height: 120px;
  padding:0 20px;
  background: #fff;
  position: relative;
  display:flex;
  justify-content: space-between;
  align-items:center;
    h1 {
      width: 17%;
      display:flex;
      justify-content: center;
    }
    #header__nav { 
      width: 1250px;
      ul {
        display: flex;
        justify-content: center;
        height: 120px;
        li { 
          font-size: 20px;
          padding: 0 20px;
          display:flex;
          align-items: center;
          transition: all 0.5s;
          font-weight: 500;
          &:nth-child(1):hover {
            background: #ff5d0e;
            color: #fff;
          }
          &:nth-child(2):hover  {
            background: #ffa70e;
            color: #fff;
          }
          &:nth-child(3):hover {
            background: #ffcb06;
            color: #fff;
          }
          &:nth-child(4):hover {
            background: #04a6e2;
            color: #fff;
          }
          &:nth-child(5):hover {
            background: #9b43ff;
            color: #fff;
          }
          &:nth-child(6):hover {
            background: #eb3690;
            color: #fff;
          }
          a {
            height: 120px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .closeNav { display: none; }
  }
  .member{
    width: 17%;
    display:flex;
    align-items:center;
    font-size:40px;
    margin:0 10px;
   color:#2da5da;
  
    a{
      margin: 0 10px;
    }
    
    
   }
}
`

const ItemCount = styled.div`
  position: fixed;
  right:60px;
  bottom:190px;
  background:yellow;
  border-radius: 20%;
  z-index:9999999999999999999999;

  
  span {
    position: absolute;
    top: -10px;
    right: 45px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:#ff5d0e;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
  }
`
const Toggle = styled.div`

`

const Header = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state=>state.products.carts)
    const user = useSelector(state=>state.members.user)

    const handleLogout = (e)=>{
      e.preventDefault()
      dispatch(userLogout())
    
    }

    useEffect(()=>{
      dispatch(fetchProducts())
      let loging = localStorage.loging
      if (loging) {
        dispatch(userLogin(JSON.parse(loging)))
      }
    }, [dispatch])

    return (
        <HeaderBlock>
           <div className='header__wrap'>
              <h1 className="header__logo">
                  <Link to="/"><img src="./assets/image/card_main_logo.png" alt="" /></Link>
              </h1>            
              <nav id="header__nav">
                  <ul>
                      <li>
                          <NavLink to="/news">새소식</NavLink>
                      </li>
                      <li>
                          <NavLink to="/product">제품정보</NavLink>
                      </li>
                      <li>
                          <NavLink to="/play">놀이방법</NavLink>
                      </li>
                      <li>
                          <NavLink to="/event">이벤트</NavLink>
                      </li>
                      <li>
                          <NavLink to="/search">카드검색</NavLink>
                      </li>
                      <li>
                          <NavLink to="/application">대회신청</NavLink>
                      </li>
                  </ul>
              </nav>
              { user ?
                <div className="member">
                  <a href="#" onClick={ handleLogout }><FaUserTimes /></a>
                  <Link to="/memberModify"><FaUserEdit /></Link>
                </div>
                :
                <div className="member">
                    <Link to="/login"><MdOutlineCatchingPokemon /></Link>
                    <Link to="/join"><FaUsers /></Link>
                </div>
              }
           </div>

            <ItemCount>
              <Link to="/cart">
                <img src="./assets/image/cart.png" alt="" />
                <span>{ carts.length }</span> 
              </Link>
            </ItemCount>

            <Toggle>
              
            </Toggle>
        </HeaderBlock>
    );
};

export default Header;