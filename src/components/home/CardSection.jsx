import React from 'react';
import styled from 'styled-components';
import CardSliderSearch from '@/components/card/CardSliderSearch';
import CardSlider from '@/components/card/CardSlider';
import CardLatest from '@/components/card/CardLatest'

const CardSectionBlock = styled.div``

const SliderSection = () => {
    return (
        <CardSectionBlock>
            <CardSliderSearch />
            <CardSlider />
            <CardLatest />
        </CardSectionBlock>
    );
};

export default SliderSection;