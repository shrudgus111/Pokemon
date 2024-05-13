import React,{ useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getTitle } from '@/store/news';
const NewsSearchBlock = styled.div`
background: url("/src/assets/image/nnews_nav_bg.jpg") center bottom;
width: 100%;
padding: 45px 0 60px;
margin-top:10px;
@media (max-width:993px) {
    margin-top:20px;
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

const NewsSearch = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getTitle(title));
        console.log(title);
    }
    return (
        <NewsSearchBlock>
            <form onSubmit={handleSearch}>
                <div className='search_wrap'>
                    <h2>소식</h2>
                    <div className='search_container'>
                        <div className='test'>
                            <input type='text' placeholder='검색어를 입력해주세요' onChange={ (e)=>setTitle(e.target.value)}></input>
                            <button type='submit'>
                                <p>검색</p>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </NewsSearchBlock>
    );
};

export default NewsSearch;