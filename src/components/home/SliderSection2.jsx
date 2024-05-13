import React, {useState} from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io';
import { MdOutlineArrowRight } from "react-icons/md";


const SliderSection2Block=styled.div`
position:relative;
margin:90px auto;
.newyou {
    overflow: hidden;
    position: relative;
    padding: 172px 0 0;
    text-align: center; /* 부모 요소를 수평으로 가운데 정렬 */

    @media (max-width:768px) {
      overflow: hidden;
      position: relative;
      padding: 132px 0 0;
      text-align: center; /* 부모 요소를 수평으로 가운데 정렬 */
  }
  
    .bg {
      position: absolute;
      top: 50px;
      right: 0;
      left: 0;
      z-index: -1;
      height: 420px;
      background: #ffe100;
    }
  
    .bg::before,
    .bg::after {
      content: ""; /* content 속성 추가 */
      position: absolute;
      right: 0;
      left: 0;
      height: 54px;
      background-repeat: repeat-x;
      animation: bg_wave 20s linear infinite;
    }
  
    .bg::before {
      top: -50px;
      background-image: url("./assets/image/img_up.png");
    }
  
    .bg::after {
      bottom: -50px;
      background-image: url("./assets/image/img_down.png");
    }
  
    @keyframes bg_wave {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 100vw;
      }
    }
  }
.slide {
     width:100%;
   margin:60px 0;
    background-position:center;
    padding: 0 20px;
    text-align:center;
  
   
 
}

.title{
    font-size:40px;
    text-align:center;
    color:#191919;
    font-weight:800;
    font-family: 'Poppins', sans-serif;
    span{
        color:#E60012;
    }
}
.more{
    font-size: 20px;
    padding: 20px 100px;
    text-align: center;
    color: #fff;
    background-color: #000;
    display: inline-block;
    font-weight:800;
    border-radius: 0;
    transform: skew(-20deg);
    display:flex;
    align-items:center;
    justify-content: center;

    p{
        
    transform: skew(20deg);
    text-align: center;
    align-items:center;

   svg{
    font-size: 44px;
    position: absolute;
    left:72px;
    height:28px;
    line-height:67px;
   }
    
    }

   
 
}
    .slick-arrow {
        position: absolute; bottom:92%;   transform: translateX(-50%);
        font-size: 80px; color:#000;
        &.slick-prev {right:85px; z-index:9999}
        &.slick-next {right:0px;}
    }
    .slick-slide {
        margin: 0 !important; /* 좌우 마진 제거 */
        width: calc(100% / 3); /* 슬라이드 너비 조정 */
        flex: 0 0 auto; /* 슬라이드의 크기가 고정되도록 설정 */
    }
    .slide iframe {
        width: 100%; /* 슬라이드 너비에 맞게 설정 */
        aspect-ratio: 16 / 9; /* 비디오의 가로 세로 비율 설정 */
    }

  
}


@media (max-width:768px) {
 .slick-slider{
  margin-top:37px;
 }


 
}

`

const SliderSection2 = () => {

    const options = {
        dots:false,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow : <IoIosArrowDropleftCircle />,
        nextArrow : <IoIosArrowDroprightCircle />,
        responsive : [
          {
              breakpoint:769,
              settings:{
                  slidesToShow:1,
                  slideToScroll:1
              }
          }
      ]

    }






    return (
        <SliderSection2Block>
 
<div className='newyou'>
    <div className="bg"></div>
    <div className="title">POKÉMON in <span data-aos="zoom-in"> YOUTUBE</span>
     <Slider {...options}>
                    <div className="slide slide1"><iframe width="100%" height="400" src="https://www.youtube.com/embed/i4MvhzqDoc8?si=eLwL5Q0PjULwTvhK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="slide slide2"><iframe width="100%" height="400" src="https://www.youtube.com/embed/pPnv_kPMpvc?si=C7nKC2PoWxGnU4ym" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="slide slide3"><iframe width="100%" height="400" src="https://www.youtube.com/embed/sAilovtGuvY?si=IoCGyz0odrq6Sowy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="slide slide4"><iframe width="100%" height="400" src="https://www.youtube.com/embed/UA0REx_Btso?si=_bAvLgOLKHSGxFNF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="slide slide5"><iframe width="100%" height="400" src="https://www.youtube.com/embed/XW2WPvfmiL0?si=R38DsXudESnXu_aP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="slide slide6"><iframe width="100%" height="400" src="https://www.youtube.com/embed/gHm2ojoJAk8?si=obUBzapo9t6IOnMj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
             </Slider>
             <a href="/play"><div className="more"><p>더보기 <MdOutlineArrowRight /></p></div></a>
             </div>
</div>
            
        </SliderSection2Block>
    );
};

export default SliderSection2;