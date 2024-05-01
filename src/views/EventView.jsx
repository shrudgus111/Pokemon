import React from 'react';
import styled from 'styled-components';
import Title from '@/components/layout/Title';
import EventFixed from '@/components/event/EventFixed'
import EventList from '@/components/event/EventList'

const EventViewBlock = styled.div``

const EventView = () => {
    return (
        <EventViewBlock>
            <Title title="이벤트"/>
            <EventFixed/>
            <EventList/>
        </EventViewBlock>
    );
};

export default EventView;