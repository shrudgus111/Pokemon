import React from 'react';
import styled, { keyframes } from 'styled-components';
import card from '/src/assets/data/card'
import { useSelector} from 'react-redux'

const rotateAnimation = keyframes`
  0% {
    transform: rotateX(5deg) rotateY(-8deg) rotateZ(2deg) translateZ(0) scale(1.1);
  }
  10% {
    transform: rotateX(10deg) rotateY(-16deg) rotateZ(4deg) translateZ(0) scale(1.8)
  }

`;

const CardListBlock = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
padding: 50px 0 130px;
.card {
  display: flex;
  justify-content: center;
  flex: 1 1 18.3%;
  width: 220px;
  heigh6: 306px;
  max-width: 60%;
  margin: 10px;
  position: relative;
  @media (max-width: 993px){
    flex: 0 0 45%;
    width: 100%;
    height: 100%;
  }
  a {
    perspective: 1000px;
    img {
      transform-style: preserve-3d;
      position: relative;
      transform: rotateY(0);
      z-index: 1;
      &:hover {
        animation: ${rotateAnimation} 0.5s ease;
        transform: scale(1.8);
        box-shadow: 0 60px 20px 20px rgba(0, 0, 0, 0.4)
      }
    }
  }
  &:hover {
    z-index: 9999;
  }
}
.no_result {
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
      font-weight:400;
  }
}
`
const CardList = () => {
  const name = useSelector(state => state.card.name);

  const filteredCards = card.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  let renderedCards;
  
  if (name && filteredCards.length > 0) {
    renderedCards = filteredCards.map((cardItem, index) => (
      <div key={index} className='card'>
        <a href='#'>
          <img src={cardItem.img} alt={cardItem.name} />
        </a>
      </div>
    ));
  } else if (name && !filteredCards.length) {
    renderedCards = <div className='no_result'>
                      <div><img src="src/assets/image/no_result2.png" alt="" /></div>
                      <h3>검색결과가 없습니다.</h3>
                      <p>다른 키워드로 검색해주세요</p>
                    </div>;
  } else {
    renderedCards = card.map((item, index) => (
      <div key={index} className='card'>
        <a href='#'>
          <img src={item.img} alt={item.name} />
        </a>
      </div>
    ));
  }
  return (
    <CardListBlock>
        {renderedCards}
    </CardListBlock>
  );
};
export default CardList;