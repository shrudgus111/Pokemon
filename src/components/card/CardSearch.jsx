import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { getName } from '@/store/card'
const CardSearchBlock = styled.div`

margin: 100px 0;
.search_wrap{
    display: flex;
    align-items: center;
    input{
        width: 50rem;
        height: 40px;
        border: 5px solid #000;
    }
    span{
        button{
            width: 50px;
            height: 40px;
            border: 5px solid #000;
            color: #fff;
            background: #000;
            font-size: 15px;
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