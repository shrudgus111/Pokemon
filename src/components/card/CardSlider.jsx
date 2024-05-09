import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import card from '/src/assets/data/card';
import { getOnoff } from '@/store/card'
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import prevArrowImg from '/src/assets/image/swiper_prev_dark.png';
import nextArrowImg from '/src/assets/image/swiper_next_dark.png';

const CardSliderBlock = styled.div`
  margin: 0 auto;
  position: relative;
  background: url("/src/assets/image/bg_pattern.jpg");
  img { 
    width: 100%;
  }
  h3 {
    text-align: center;
    color: #fff;
    font-size: 30px;
  }
  .slick-list {
    padding: 50px 50px !important;
    position: relative;
    @media (max-width:700px){
      padding-top: 90px !important;
    }
    @media (max-width:600px){
      padding-top: 90px !important;
    }
  }
  .slick-track{
    padding-top: 50px;
  }
  .slick-arrow {
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%); 
    color: #000;
    width: 90px;
    height: 90px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.5s ease;
    &.slick-prev { 
      left: 25%;
      z-index: 2;
      @media (max-width:500px){
        left: 0%;
      }
      &:hover {
        content: url("/src/assets/image/swiper_prev_dark_hover.png");
      }
    }
    &.slick-next { 
      right: 25%;
      @media (max-width:500px){
        right: 0%;
      }
      &:hover {
        content: url("/src/assets/image/swiper_next_dark_hover.png");
      }
    } 
  }
  .slick-current {
    // background: linear-gradient(to bottom, transparent, transparent, #2a2a29);
    border-radius: 15px;
    filter: brightness(100%) opacity(100%) !important;
    transform: translateY(-10%);
  }
  .card {
    padding: 0 10px 25px;
    cursor: zoom-in;
  }
  .slick-slide {
    filter: brightness(50%) opacity(70%);
  }
  .slick-slider {
    @media(max-width:768px) {
      margin-top: 0 !important;
    }
  }:hover .slick-arrow {
    opacity: 1;
  }
  .slick-current .card-content {
    margin-top: 20px;
    display: block;
    padding: 15px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    border-radius: 15px;
  }
  .card-content {
    display: none;
    background: #f6f6f6;
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
  cursor: none;
    .noResult {
      position: absolute;
    }
`;

const ModalWrapper = styled.div`
  width: 450px;
  position: relative;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(105deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255, 0.6) 50%,
    transparent 54%);
    filter: brightness(1.1) opacity(0.8);
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
  }
`;

const ModalImage = styled.img`
  width: 300px;
`;
const NoResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 15px;

  h3 {
    font-size: 28px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const CardSlider = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePosition, setMousePosition] = useState({x:0, y:0});

  function handleMouseMove(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 5) * x + 43;
    const rotateX = (4 / 30) * y - 43;
    setRotation({ rotateX, rotateY });
    setMousePosition({x,y});
  }
  const series = useSelector(state => state.card.series);
  const defaultSeries = 'old';
  const sliderList = series ? card.filter(item => item.series === series) : card.filter(item => item.series === defaultSeries);

  const dispatch = useDispatch();
  const closeModal1 = ()=> {
    dispatch(getOnoff(false));
  }

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
    autoplay: false,
    infinite: true,
    speed: 400,
    delay: 400,
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
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  const name = useSelector(state => state.card.modal);
  const onoff = useSelector(state => state.card.onoff);
  
  const card1 = [...card];

  const filteredCards = card1.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  let renderedCards;
  let noResult;
  if (name && filteredCards.length > 0) {
    const firstFilteredCard = filteredCards[0];
    renderedCards = (
      <div key={firstFilteredCard.id} className='card1'>
        <div className="container" onMouseMove={handleMouseMove} >
          <img src={firstFilteredCard.img} alt={firstFilteredCard.name} />
        </div>
      </div>
    );
  }  else if (name && !filteredCards.length) {
    noResult = (
      <NoResultBlock>
        <div><img src="src/assets/image/no_result2.png" alt="" /></div>
        <h3>검색결과가 없습니다.</h3>
        <p>다른 키워드로 검색해주세요</p>
      </NoResultBlock>
    );
  }

  return (
    <CardSliderBlock>
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
            <div className='overlay' style={{ backgroundPosition: `${mousePosition.x/1 + mousePosition.y/1}%` }}></div>
            <ModalImage src={selectedCard.img} alt={selectedCard.name} />
          </ModalWrapper>
        </ModalOverlay>
      )}
       {onoff &&(
        <ModalOverlay onClick={closeModal1}>
          <ModalWrapper onClick={closeModal1} onMouseMove={handleMouseMove}  style={{ transform: `perspective(350px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)` }}>
            <div className='overlay' style={{ backgroundPosition: `${mousePosition.x/1 + mousePosition.y/1}%` }}></div>
            {renderedCards}
          </ModalWrapper>
            <div className='noResult'>{noResult}</div>
        </ModalOverlay>
       )}
    </CardSliderBlock>
  );
};

export default CardSlider;