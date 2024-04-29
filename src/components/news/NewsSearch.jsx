import React,{ useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getTitle } from '@/store/news';
const NewsSearchBlock = styled.div`
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
                    <input type='text' placeholder='검색어를 입력해주세요' onChange={ (e)=>setTitle(e.target.value)}></input>
                    <span><button type='submit'>검색</button></span>
                </div>
            </form>
        </NewsSearchBlock>
    );
};

export default NewsSearch;