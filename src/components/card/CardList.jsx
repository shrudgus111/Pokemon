import React, { useState } from 'react';
import styled from 'styled-components';
import card from '/src/assets/data/card';
import { useSelector } from 'react-redux';

const CardListBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0 130px;
  .card_list {
    display: flex;
    flex-wrap: wrap;
      .card {
        flex: 0 0 18.3%;
        margin: 10px;
        display:flex;
        justify-content: center;
        @media (max-width: 680px) {
          flex: 0 0 45%;
          pointer-events: none;
        }
        .container {
          img {
            border-radius: 8px;
            z-index: 1;
            &:hover {
              transform: scale(1.8);
              box-shadow: 0 60px 20px 20px rgba(0, 0, 0, 0.4);
            }
          }
        }
        &:hover {
          z-index: 9999;
          transform: perspective(350px) rotateX(${props => props.rotation.rotateX}deg) rotateY(${props => props.rotation.rotateY}deg);
        }
      }
    }
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

const CardList = () => {
  const name = useSelector(state => state.card.name);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;
    setRotation({ rotateX, rotateY });
  }

  const filteredCards = card.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  let renderedCards;

  if (name && filteredCards.length > 0) {
    renderedCards = filteredCards.map((cardItem, index) => (
      <div key={index} className='card'>
        <div className="container" onMouseMove={handleMouseMove} >
          <img src={cardItem.img} alt={cardItem.name} />
        </div>
      </div>
    ));
  } else if (name && !filteredCards.length) {
    renderedCards = (
      <NoResultBlock>
        <div><img src="src/assets/image/no_result2.png" alt="" /></div>
        <h3>검색결과가 없습니다.</h3>
        <p>다른 키워드로 검색해주세요</p>
      </NoResultBlock>
    );
  } else {
    renderedCards = card.map((item, index) => (
      <div key={index} className='card'>
        <div className="container" onMouseMove={handleMouseMove}>
          <img src={item.img} alt={item.name} />
        </div>
      </div>
    ));
  }

  return (
    <CardListBlock rotation={rotation}>
      <div className='card_list'>
        {renderedCards}
      </div>
    </CardListBlock>
  );
};

export default CardList;