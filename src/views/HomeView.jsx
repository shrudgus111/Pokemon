import React, {useEffect} from 'react';
import styled from 'styled-components'
import Grid from '@/components/home/Grid';
import Scact from '@/components/home/Scact';
import SliderSection2 from '@/components/home/SliderSection2';


const HomeViewBlock = styled.div``

const HomeView = () => {
    return (
        <HomeViewBlock>
           <Grid />
           <Scact />
           <SliderSection2 />
        </HomeViewBlock>
    );
};

export default HomeView;