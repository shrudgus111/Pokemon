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
  padding:0 20px;
  background: #fff;
  position: relative;
  display:flex;
  justify-content: space-between;
  align-items:center;

 .member{
  display:flex;
  justify-content: space-between;
  align-items:center;
  font-size:40px;
  margin:0 10px;
 color:#2da5da;

  a{
    margin: 0 10px;
  }
  
  
 }
 

  #header__nav { 
    ul {
      display: flex;
      justify-content: center;
      li { margin: 10px 10px; font-size: 20px; 
        a { transition: all 0.5s;
             height:120px;
            line-height:120px;
            padding:0 10px;
        
        }
        &:nth-child(1) a:hover, a.active  {
          background:#ff5d0e  /* 새소식 링크에 대한 호버 시 배경색 변경 */
        }
        &:nth-child(2) a:hover, a.active   {
          background: #ffa70e /* 제품정보 링크에 대한 호버 시 배경색 변경 */
        }
        &:nth-child(3) a:hover, a.active   {
          background: #ffcb06 /* 제품정보 링크에 대한 호버 시 배경색 변경 */
        }
        &:nth-child(4) a:hover, a.active  {
          background: #04a6e2 /* 제품정보 링크에 대한 호버 시 배경색 변경 */
        }
        &:nth-child(5) a:hover, a.active   {
          background: #9b43ff /* 제품정보 링크에 대한 호버 시 배경색 변경 */
        }
        &:nth-child(6) a:hover, a.active   {
          background: #eb3690  /* 제품정보 링크에 대한 호버 시 배경색 변경 */
        }
        
      }
    }
    .closeNav { display: none; }
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
        </HeaderBlock>
    );
};

export default Header;