import React from 'react';
import styled from 'styled-components'
import Title from '@/components/layout/Title'
import ApplicationSection from '@/components/application/ApplicationSection';

const ApplicationViewBlock =styled.div``

const ApplicationView = () => {
    return (
        <ApplicationViewBlock>
            <Title title="플레이어즈" />
            <ApplicationSection />
        </ApplicationViewBlock>
    );
};

export default ApplicationView;