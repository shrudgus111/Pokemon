import React from 'react';
import styled from 'styled-components'
import news from '/src/assets/data/news'
import { useSelector} from 'react-redux'

const NewsListBlock = styled.div`
background: #f7f7f7;
width: 100%;
padding: 50px 0 130px;
    .container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1250px;
        margin: 0 auto;
        
        .news {
            flex: 0 0 25%;
            padding: 10px; 10px;
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
                        height: 19.2vh;
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
`

const NewsList = () => {
    const title = useSelector(state => state.news.title)

    const filteredNews = news.filter(item => {
        return item.title.toLowerCase().includes(title.toLowerCase());
      });


    return (
        <NewsListBlock>
            <div className='container'>
                {filteredNews.length > 0 ? (
                    filteredNews.map((newsItem, index) => (
                        <div key={index} className="news">
                            <div className='newsWrap'>
                                <div className='thum'>
                                    <img src={newsItem.img} alt={newsItem.title}/>
                                    {newsItem.badge && <img className='badge' src="src/assets/image/badge_tri_gradient.png"/>}
                                </div>
                                <div className='text'>
                                    <h3>{newsItem.title}</h3>
                                    <div className='detail'>
                                        <span>{newsItem.type}</span>  |  <span>{newsItem.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ): (
                    news.map((item, index) => (
                        <div key={index} className="news">
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
                    ))
                )}
            </div>
        </NewsListBlock>
    );
};

export default NewsList;