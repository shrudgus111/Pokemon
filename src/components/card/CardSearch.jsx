import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { getName } from '@/store/card'
const CardSearchBlock = styled.div`
background: url("/assets/image/cards-bg.jpg");
padding: 50px 0;
.search_wrap{
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    height: 50px;
    @media(max-width:993px){
        height: 40px;
        padding: 0 20px;
    }
    input{
        width: 100%;
        border: 5px solid #484848;
        padding-left: 20px;
        outline: none;
    }::placeholder {
        font-size: 15px;
        font-family: "Noto Sans", "Noto Sans KR";
        font-weight: 400;
        color: #B7B8B7;
    }
     button{
        border: 5px solid #484848;
        color: #fff;
        background: #484848;
        font-size: 15px;
        padding: 10px 12px;
        @media(max-width:993px){
            height: 40px;
            padding: 0;
        }
    }
}
` 

const CardSearch = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getName(name));
    }
    return (
        <CardSearchBlock>
            <form onSubmit={handleSearch}>
                <div className='search_wrap'>
                    <input type='text' placeholder='카드검색 (포켓몬 이름 혹은 텍스트를 입력하세요)' onChange={ (e)=>setName(e.target.value)}></input>
                    <span><button type='submit'>검색</button></span>
                </div>
            </form>
        </CardSearchBlock>
    );
};

export default CardSearch;