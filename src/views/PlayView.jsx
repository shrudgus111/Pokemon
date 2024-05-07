import React from 'react';
import styled from 'styled-components'
import Title from '@/components/layout/Title'
import PlaySection from '@/components/play/PlaySection';

const PlayViewBlock=styled.div``

const PlayView = () => {
    return (
        <PlayViewBlock>
             <Title title="놀이방법" />
             <PlaySection />
        </PlayViewBlock>
    );
};

export default PlayView;