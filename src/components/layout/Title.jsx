import React from 'react';
import styled from 'styled-components'

const TitleBlock = styled.div`
    font-size:40px;
    text-align:center;
    margin:50px 0;
    font-weight: 700;

    @media (max-width:768px) {
        font-size:35px;
        text-align:center;
        margin:50px 0;
    }

    

`

const Title = ({title}) => {
    return (
        <TitleBlock>
            {title}
        </TitleBlock>
    );
};

export default Title;