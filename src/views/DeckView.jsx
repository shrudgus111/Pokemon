import React from 'react';
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

import DeckSection from '@/components/deck/DeckSection';

const DeckViewBlock=styled.div`
.sub{
       border-bottom:2px solid #000;
       height:76px;
       margin-bottom:28px;
h2{
    font-size:35px;
    text-align:left;
    margin:50px 0;
    font-weight: 700;

    img{
        width:3%;
       
    }

    @media (max-width:768px) {
        font-size:22px;
        text-align:center;
        margin:60px 0;

        img{
            width:5%;
           
        }
    }

}
}
`

const DeckView = () => {
    const location = useLocation()
    const { post }= location.state
    return (
        <DeckViewBlock className='row'>
         <div className='sub'>   <h2> <img src="/assets/image/sub-boll.png" alt="" />  2024 코리안리그 시즌3 덱 레시피 </h2></div>
             <DeckSection post={post} />
        </DeckViewBlock>
    );
};

export default DeckView;