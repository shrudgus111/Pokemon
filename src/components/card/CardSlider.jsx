import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import card from '/src/assets/data/card';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevArrowImg from '/src/assets/image/swiper_prev_dark.png';
import nextArrowImg from '/src/assets/image/swiper_next_dark.png';

const CardSliderBlock = styled.div`
  margin: 0 auto;
  background-image: url("/src/assets/image/bg_pattern3.jpg");
  img { 
    width: 100%;
  }
  padding: 50px 0 90px;
  h3 {
    text-align: center;
    color: #fff;
    font-size: 30px;
  }
  .slick-list {
    height: 450px;
    position: relative;
    @media (max-width:700px){
      height: 200px;
    }
  }
  .slick-track{
    position: absolute;
    top: 15%;
    padding: 0 50px;
    height: 450px;
    @media (max-width:700px){
      height: 250px;
    }
  }
  .slick-arrow {
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%); 
    color: #000;
    width: 90px;
    height: 90px;
    &.slick-prev { 
      left: 25%;
      z-index: 2;
      &:hover {
        content: url("/src/assets/image/swiper_prev_dark_hover.png");
      }
    }
    &.slick-next { 
      right: 25%;
      &:hover {
        content: url("/src/assets/image/swiper_next_dark_hover.png");
      }
    } 
  }
  .slick-current {
    background: linear-gradient(to bottom, transparent, transparent, #2a2a29);
    border-radius: 15px;
    opacity: 1 !important;
    transform: translateY(-10%);
  }
  .card {
    padding: 0 10px 25px;
    cursor: pointer;
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
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  padding: 20px;
  width: 450px;
`;

const ModalImage = styled.img`
  width: 300px;
`;

const CardSlider = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 5) * x + 43;
    const rotateX = (4 / 30) * y - 43;
    setRotation({ rotateX, rotateY });
  }
  const series = useSelector(state => state.card.series);
  const defaultSeries = 'old';
  const sliderList = series ? card.filter(item => item.series === series) : card.filter(item => item.series === defaultSeries);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (item) => {
    setSelectedCard(item);
    setModalOpen(true);
    setModalSettings({ ...modalSettings, arrows: false });
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalOpen(false);
    setModalSettings({ ...modalSettings, arrows: true });
  };

  const [modalSettings, setModalSettings] = useState({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: 7,
    arrows: true,
    prevArrow: <img src={prevArrowImg} alt="Previous" />,
    nextArrow: <img src={nextArrowImg} alt="Next" />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1899,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  return (
    <CardSliderBlock>
      <h3>최신카드정보</h3>
      <Slider {...modalSettings}>
        {sliderList.map((item, index) => (
          <div key={index} className='card' onClick={() => openModal(item)}>
              <img src={item.img} alt={item.name} />
            <div className='card-content'>{item.name}</div>
          </div>
        ))}
      </Slider>
      {modalOpen && (
        <ModalOverlay>
          <ModalWrapper onClick={closeModal} onMouseMove={handleMouseMove}  style={{ transform: `perspective(350px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)` }}>
            <ModalImage src={selectedCard.img} alt={selectedCard.name} />
          </ModalWrapper>
        </ModalOverlay>
      )}
    </CardSliderBlock>
  );
};

export default CardSlider;