import React from 'react';
import styled from 'styled-components'
import Slider from "react-slick";
import card from '/src/assets/data/card'
import { useSelector} from 'react-redux'
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import prevArrowImg from '/src/assets/image/swiper_prev_dark.png';
import nextArrowImg from '/src/assets/image/swiper_next_dark.png';

const CardSliderBlock = styled.div`
    margin:0 auto;
    background-image: url("/src/assets/image/bg_pattern3.jpg");
    img { width:100%;}
    padding: 50px 0 90px;
    h3 {
        text-align: center;
        color: #fff;
        font-size: 30px;
    }
    .slick-list {
        height: 450px;
        position: relative;
    }
    .slick-track{
        position: absolute;
        top: 20%;
        padding: 0 50px;
    }
    .slick-arrow {
        position:absolute; 
        top:50%; transform:translateY(-50%); color:#000;
        width: 90px;
        height: 90px;
        &.slick-prev { 
            left:25%;
            z-index:2;
            &:hover {
                content: url("/src/assets/image/swiper_prev_dark_hover.png");
            }
        }
        &.slick-next { 
            right:25%;
            &:hover {
                content: url("/src/assets/image/swiper_next_dark_hover.png");
            }
        } 
    }
    .slick-current {
            background: linear-gradient(to bottom, transparent, transparent, #2a2a29);
            border-radius: 15px;
            opacity: 1 !important;
            transform: translateY(-10%)
    }
    .card {
        padding: 0 10px 25px;
    }
    .slick-slide {
        opacity: 0.5;
    }
    .slick-current .card-content {
        display: block;
        margin: 15px 0 0 10px;
        color: #fff;
        font-size: 20px;
    }
    .card-content {
        display: none;
    }
`

const CardSlider = () => {
    const series = useSelector(state => state.card.series);
    const defaultSeries = 'old'
    const sliderList = series ? card.filter(item => item.series === series) : card.filter(item => item.series === defaultSeries);


    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToScroll: 1,
      slidesToShow: 7,
      prevArrow : <img src={prevArrowImg} alt="Previous" />,
      nextArrow : <img src={nextArrowImg} alt="Next" />,
      centerMode: true,
    };
    return (
        <CardSliderBlock>
            <h3> 최신카드정보 </h3>
            <Slider {...settings}>
                {
                    sliderList.map((item, index) => (
                        <div key={index} className='card'>
                            <a href='#'>
                                <img src={item.img} alt={item.name} />
                            </a>
                            <div className='card-content'>{item.name}</div>
                        </div>
                    ))
                }
            </Slider>
        </CardSliderBlock>
    );
};

export default CardSlider;