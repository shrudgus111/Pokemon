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
margin: auto;
display: flex;
flex-wrap: wrap;
.card {
  width: 18.3%;
  max-width: 60%;
  margin: 10px;
  position: relative;
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
    z-index: 2; /* 호버 시 z-index 값을 높여 맨 위로 올립니다. */
  }
}
`
const CardList = () => {
  const name = useSelector(state => state.card.name);
  console.log(name);

  const filteredCards = card.filter(item => {
    const slicedName = item.name.slice(0, name.length);
    return slicedName === name || (slicedName.length <= 3 && name.includes(slicedName));
  });

  return (
    <CardListBlock>
        {filteredCards.length > 0 ? (
          filteredCards.map((cardItem, index) => (
            <div key={index} className='card'>
                <a href='#'>
                    <img src={cardItem.img} alt={cardItem.name} />
                </a>
            </div>
          ))
        ) : (
          card.map((item, index) => (
            <div key={index}>
                <a href='#'>
                    <img src={item.img} alt={item.name} />
                </a>
            </div>
          ))
        )}
    </CardListBlock>
  );
};
export default CardList;