import React from 'react';
import styled from 'styled-components';
import Title from '@/components/layout/Title';
import CardList from '@/components/card/CardList';
import CardSearch from '@/components/card/CardSearch';


const CardViewBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const CardView = () => {

    return (
      <CardViewBlock>
        <Title title="카드검색" />
        <CardSearch />
        <CardList />
      </CardViewBlock>
    );
  };
export default CardView;