import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterBlock = styled.div`
    background: #000;
    color: #fff;
    padding:20px 0 3px 0;
   
   
  
    .footer__nav {
       display:flex;
       justify-content: space-between;
         padding: 50px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        a { margin-right: 17px; }

        .na{
          span{
            margin-left: 17px; 
          }
        }

        .logo{
            text-align:left;
            display:inline-block;
            left:0;
        }
    }
    .footer__info {
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #1a1a1a;
        width:100%;
        padding:35px 46px;
        .hc{
            p{
                margin:4px 0;
            }
        span {
            position: relative;
            margin-left: 14px;
            &::before {
                content: '';
                position: absolute;
                top: 5px;
                left: -10px;
                width: 1px;
                height: 14px;
                background: #fff;
            }
        }
    }

    .sns{
       
        .sn2{
            display:flex;
            align-items:center;

            li{
                 margin:0 7px;
            }
        }
        
        
    }
}

.footer__lo{
    display:flex;
    justify-content: center;
    align-items:center;
    background: #000;
    text-align:center;
    width:100%;
    
 .hb{
 img{
    margin:60px 0;
    width:100%;
    background:#fff;
    border-radius:15px;
    padding:0px 2px 7px 2px;
 }

 }

}
   
 
    }
`

const Footer = () => {
    return (
        <FooterBlock>
            
       
            <div className="footer__nav">
            <div className="logo"><img src="./assets/image/ft_logo.png" alt="" /></div>
              <div className='na'>
                    <Link to="/">회사소개 <span>|</span></Link>
                    <a href="#">사업내용 <span>|</span></a>
                    <a href="#">제휴안내 <span>|</span></a>
                    <a href="http://www.naver.com" target="_blank">이용약관 <span>|</span></a>
                    <Link to="/">개인정보처리방침 <span>|</span></Link>
                    <a href="#">이메일무단수집거부 <span>|</span></a>
                    <a href="#">고객센터</a>
              </div>
            </div>
            <div className="footer__info">
                <div className="hc">
                <p>(주)포켓몬코리아   경기도 용인시 수지구 신수로 801, 4층</p>
                <p>대표이사:임재범   개인정보관리책임자:임재범   사업자등록번호:113-86-07676</p>
                <p>©2024 Pokémon. ©1995-2024 Nintendo/Creatures Inc./GAME FREAK inc.</p>
                </div>
                <div className="sns">
                    <ul className='sn2'>
                        <li><a href='/'><img src="./assets/image/icon_faceb.png" alt="" /></a></li>
                        <li><a href='/'><img src="./assets/image/icon_insta.png" alt="" /></a></li>
                        <li><a href='/'><img src="./assets/image/icon_youtube.png" alt="" /></a></li>
                        <li><a href='/'><img src="./assets/image/icon_pokemon.png" alt="" /></a></li>
                    </ul>
                </div>
              
            </div>

            <div className="footer__lo">
                <div className="hb">
                <img src="./assets/image/fo-logo.png" alt="" />
                </div>
             
              
            </div>
          
        </FooterBlock>
    );
};

export default Footer;