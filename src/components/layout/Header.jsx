import React, {useEffect, useState} from 'react';
import cn from 'classnames'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { BsCartPlusFill  } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@/store/product'
import { userLogout, userLogin } from '@/store/member'
import { FaUsers, FaBars  } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { FaUserTimes } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const HeaderBlock = styled.div`
position: fixed;
z-index: 99999;
top:0;
left: 0;
right: 0;
  .header__wrap{
    height: 120px;
    padding:0 20px;
    background: #fff;
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @media(max-width: 991px){
      height: 70px;
      padding: 0;
    }
    h1 {
      width: 20%;
      display:flex;
      justify-content: center;
      @media(max-width: 991px){
        position:absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%, -50%)
      }
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
      width: 20%;
      display:flex;
      align-items:center;
      justify-content: center;
      font-size:40px;
      color:#333;
      gap: 10px;
    a{
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 14px;
        @media(max-width: 991px){
          display: none;
        }
      }
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
const Hamburger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  color: #fff;
  background: #000;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 100%;
  bottom: 0;
  right: 0px;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  transition: all 0.5s;
  overflow:hidden;
  &.on{left: 0;}
  .closeNav {
    font-size: 30px;
    color: #000;
    position: absolute;
    top: 20px;
    z-index: 99999;
    transition: all 0.3s;
    &.on {top: 0; right: 0; height: 70px; width: 50px; color: #fff; transition: all 0.5s;}
  }
  ul {
    position:absolute;
    top:0;
    right: -200px;
    height: 100%;
    width: 100%;
    background: #fff;
    transition: all 0.3s 0.2s;
    &.on {right:0;}
    li {
      text-align: left;
      margin-left: 20px;
      transition: all 0.2s;
      &:nth-child(1){
        margin-left: 0;
      }
      &:nth-child(2):hover {
        background: #ff5d0e;
        color: #fff;
      }
      &:nth-child(3):hover  {
        background: #ffa70e;
        color: #fff;
      }
      &:nth-child(4):hover {
        background: #ffcb06;
        color: #fff;
      }
      &:nth-child(5):hover {
        background: #04a6e2;
        color: #fff;
      }
      &:nth-child(6):hover {
        background: #9b43ff;
        color: #fff;
      }
      &:nth-child(7):hover {
        background: #eb3690;
        color: #fff;
      }
      a {
        display: block;
        border-bottom: 1px solid #000;
        line-height: 60px;
        transition: all 0.5s;
        font-weight: 500;
        font-size: 17px;
        padding-left: 20px;
        &:hover, &.active { color: #000; }
      }
      &:nth-child(1) {
        height: 70px;
        background: #000;
      }
    }
  }
`

const Header = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state=>state.products.carts)
    const user = useSelector(state=>state.members.user)
    const mobile = useMediaQuery({ maxWidth:991 })
    const [openNav, setOpenNav] = useState(false)

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
              { mobile &&
                 <Hamburger onClick={()=>setOpenNav(true)}>
                    <FaBars />
                 </Hamburger>
              }
              {mobile ||
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
              }
              { user ?
                <div className="member">
                  <a href="#" onClick={ handleLogout }><FaUserTimes /></a>
                  
                </div>
                :
                <div className="member">
                    <Link to="/login">
                      <MdOutlineCatchingPokemon />
                      <span>로그인</span>
                      </Link>
                    <Link to="/join">
                      <FaUsers />
                      <span>회원가입</span>
                      </Link>
                </div>
              }
           </div>
            <ItemCount>
              <Link to="/cart">
                <img src="./assets/image/cart.png" alt="" />
                <span>{ carts.length }</span> 
              </Link>
            </ItemCount>
            { mobile &&
            <MobileNav className={ openNav && "on"}>
              <MdClose className={cn("closeNav", openNav && "on")} onClick={()=>setOpenNav(false)} />
              <ul className={openNav && "on"}>
                <li>

                </li>
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
            </MobileNav>
            }
        </HeaderBlock>
    );
};

export default Header;