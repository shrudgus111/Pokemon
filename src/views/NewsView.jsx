import React from 'react';
import styled from 'styled-components';
import NewsSearch from '@/components/news/NewsSearch'
import NewsList from '@/components/news/NewsList'

const NewsViewBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const News = () => {
    return (
        <NewsViewBlock>
            <NewsSearch />
            <NewsList />
        </NewsViewBlock>
    );
};

export default News;