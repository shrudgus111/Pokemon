import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { getModal, getOnoff } from '@/store/card'
import { FaSearch } from "react-icons/fa";
const CardSliderSearchBlock = styled.div`
background: url("/src/assets/image/bg_pattern.jpg");
width: 100%;
padding: 45px 0 0px;
@media (max-width:993px) {
    padding: 32px 20px 30px;
}
.search_wrap{
    display: flex;
    align-items: center;
    flex-direction:column;
    h2{
        color: #fff;
        font-size: 50px;
        margin: 0 0 15px;
        @media (max-width:993px) {
            font-size: 29px;
        }
    }
    .search_container {
        position: relative;
        background: transparent;
        overflow: hidden;
        width: 60%;
        @media (max-width:993px) {
            height: 40px;
            font-size: 15px;
            width: 80%;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0px;
            top: 0;
            bottom: 0;
            width: 12px;
            background: url("/src/assets/image/search_left.png");
            background-size: cover;
            @media (max-width:993px) {
                top: 0px;
            }
            }
            .test{
                padding-left: 12px;
                display:flex;
                align-items: center;
                input{
                    padding: 20px;
                    width: 100%;
                    height: 55px;
                    outline: none;
                    font-size: 16px;
                    @media (max-width:993px) {
                        padding: 0;
                        height: 40px;
                    }
                }::placeholder {
                    font-size: 16px;
                    font-family: "Noto Sans", "Noto Sans KR";
                    font-weight: 400;
                    color: #B7B8B7;
                }
                button{
                    width: 50px;
                    height: 55px;
                    color: #fff;
                    background: #DA343C;
                    font-size: 15px;
                    @media (max-width:993px) {
                     height: 40px;       
                    }
                }
                p{
                    position: relative;
                    font-size: 20px;
                    &::after {
                        content: '';
                        position: absolute;
                        top: -18px;
                        left: -20px;
                        width: 21px;
                        height: 27px;
                        background-color: #fff;
                        transform: skew(-40deg);
                        @media (max-width:993px) {
                            top: -14px;
                        }
                    }
                }
            }
    }
    
}
` 

const CardSliderSearch = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        if(name){
            dispatch(getModal(name));
            dispatch(getOnoff(true));
        }
    }
    return (
        <CardSliderSearchBlock>
            <form onSubmit={handleSearch}>
                <div className='search_wrap'>
                    <div className='search_container'>
                        <div className='test'>
                            <input type='text' placeholder='검색 할 카드를 입력해주세요' onChange={ (e)=>setName(e.target.value)}></input>
                            <button type='submit'>
                                <p><FaSearch /></p>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </CardSliderSearchBlock>
    );
};

export default CardSliderSearch;