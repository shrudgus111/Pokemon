import React from 'react';
import styled from 'styled-components'
import news from '/src/assets/data/news'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRight } from "react-icons/md";

const NewsSectionBlock = styled.div`
background: url("/src/assets/image/bg_pattern.jpg");
width: 100%;
padding: 50px 0 130px;
    h2{
        text-align: center;
        margin-bottom: 20px;
        font-size: 50px;
        letter-spacing: -0.07em;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1250px;
        margin: 0 auto;
        
        .news {
            flex: 0 0 25%;
            padding: 10px; 10px;
            @media(max-width:993px) {
                flex: 0 0 50%;
            }
            .newsWrap {
                display: flex;
                flex-direction: column;
                height: 100%;
                transition: all 0.3s;
                cursor: pointer;
                &:hover{
                    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, .3);
                }
                .thum{
                    width: 100%;
                    background: #fff;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .badge{
                        position: absolute;
                        top:0;
                        left: 0;
                        z-index: 9999;
                        width: 59px;
                        height: 59px;
                    }
                }
                .text {
                    background: #fff;
                    height: 100%;
                    min-height: 157px;
                    padding: 20px;
                    border-bottom: 4px solid #0080FF;
                    position: relative;
                    
                    h3 {
                        font-size: 20px;
                        font-weight: 500;
                        min-height: 56px;
                        max-height: 2.858em;
                        word-spacing: 0.1rem;
                        letter-spacing: -0.1em;
                        margin-bottom: 40px;
                        display: -webkit-box;
                        overflow: hidden;
                        line-height: 1.429em;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-wrap: break-word;
                        word-break: keep-all;
                        white-space: normal;
                    }
                    .detail {
                        position: absolute;
                        left: 20px;
                        bottom: 20px;
                        font-size: 14px;
                        color: #666666;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .more {
        margin-top: 20px;
        text-align: center;
        button{
            padding:15px 125px;
            transform: skew(-20deg);
            color: #fff;
            display: inline-block;
            position: relative;
            background: linear-gradient(to right, #55bcb5, #85c083, #bec449, #f7c90e);
            border: 0;
            z-index: 2;
            outline: none;
            ::before {
                content: '';
                position: absolute;
                left: 4px;
                top: 4px;
                width: 97%;
                height: 86%;
                background-color: #fff;
                z-index: 0;
            }
            .p_contain{        
                p {
                    transform: skew(20deg);
                    font-size: 21px;
                    font-weight: bold;
                    color: #000;
                    z-index: 3;
                    letter-spacing: -0.07em;
                }
                svg {
                    position: absolute;
                    color: #D0D0D0;
                    right: 20%;
                    top: 26%;
                    transform: skew(20deg);
                    font-size: 30px;
                }
            }
        }
        button p::before {
            content: none; /* p 요소에 직접 적용된 before 가상 요소 제거 */
        }
    }
`

const NewsSection = () => {

    const filteredNews = news.filter(item => item.main
      );
      let renderedNews;
  
        renderedNews = filteredNews.map((item, index) => (
            <div key={index} className='news'>
                <div className='newsWrap'>
                    <div className='thum'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className='text'>
                        <h3>{item.title}</h3>
                        <div className='detail'>
                            <span>{item.type}</span><span>{item.date}</span>
                        </div>
                    </div>
                </div>
          </div>
        ));

    return (
        <NewsSectionBlock>
            <h2>새로운 소식</h2>
            <div className='container'>
                {renderedNews}
            </div>
            <div className='more'>
                    <Link to="/news">
                        <button>
                            <div className='p_contain'>
                                <p>더보기</p>
                                <MdOutlineArrowRight />
                            </div>
                        </button>
                    </Link>
            </div>
        </NewsSectionBlock>
    );
};

export default NewsSection;