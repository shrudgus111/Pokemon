import React from 'react';
import styled from 'styled-components';
import CardLatest from '@/components/card/CardLatest'
import CardSlider from '@/components/card/CardSlider';

const CardSectionBlock = styled.div``

const SliderSection = () => {
    return (
        <CardSectionBlock>
            <CardLatest />
            <CardSlider />
        </CardSectionBlock>
    );
};

export default SliderSection;