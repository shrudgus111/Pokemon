import React, {useEffect} from 'react';
import styled from 'styled-components'
import CardSection from '@/components/home/CardSection';
import NewsSection from '@/components/home/NewsSection';
import Grid from '@/components/home/Grid';
import Scact from '@/components/home/Scact'
import SliderSection2 from '@/components/home/SliderSection';

const HomeViewBlock = styled.div``

const HomeView = () => {
    return (
        <HomeViewBlock>
            <CardSection />
            <Grid />
            <Scact />
            <NewsSection />
            <SliderSection2/>
        </HomeViewBlock>
    );
};

export default HomeView;