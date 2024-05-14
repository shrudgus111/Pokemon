import React from 'react';
import styled from 'styled-components'
import news from '/src/assets/data/news'
import { useSelector} from 'react-redux'
import { MdOutlineArrowRight } from "react-icons/md";

const ScactBlock=styled.div`
background: #fff;
width: 100%;
padding: 40px 0 10px;

.title{
    font-size:30px;
    text-align:center;
    color:#000;
    font-weight:800;
    margin-bottom:40px;
}
.mo{ text-align: center;
    margin-top:50px;
.more{
    font-size: 20px;
    padding: 20px 100px;
    text-align: center;
    color: #fff;
    background-color: #000;
    display: inline-block;
    font-weight:800;
    border-radius: 0;
    transform: skew(-20deg);
    display:flex;
    align-items:center;
    justify-content: center;
    margin:0 auto;

    p{
        
    transform: skew(20deg);
    text-align: center;
    align-items:center;

   svg{
    font-size: 44px;
    position: absolute;
    left:72px;
    height:28px;
    line-height:67px;
   }
    
    }

   
 
}
}

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
    .no_result {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        gap: 15px;
        h3 {
            font-size: 28px;
            font-weight: 600;
        }
        p {
            font-size: 16px;
            font-weight:400;
        }

        
    }
    

`

const Scact = () => {

    const title = useSelector(state => state.news.title)

    const filteredNews = news.filter(item => {
        return item.title.toLowerCase().includes(title.toLowerCase());
      });
      let renderedNews;
  
      if (title && filteredNews.length > 0) {
        renderedNews = filteredNews.map((newsItem, index) => (
          <div key={index} className='news'>
            <div className='newsWrap'>
                <div className='thum'>
                    <img src={newsItem.img} alt={newsItem.title}/>
                    {newsItem.badge && <img className='badge' src="/assets/image/badge_tri_gradient.png"/>}
                </div>
                <div className='text'>
                    <h3>{newsItem.title}</h3>
                    <div className='detail'>
                        <span>{newsItem.type}</span>  |  <span>{newsItem.date}</span>
                    </div>
                </div>
            </div>
          </div>
        ));
      } else if (title && !filteredNews.length) {
        renderedNews = <div className='no_result'>
                            <div><img src="/assets/image/no_result2.png" alt="" /></div>
                            <h3>검색결과가 없습니다.</h3>
                            <p>다른 키워드로 검색해주세요</p>
                        </div>;
      } else {
        renderedNews = news.map((item, index) => (
            <div key={index} className='news'>
                <div className='newsWrap'>
                    <div className='thum'>
                        <img src={item.img} alt={item.title} />
                        {item.badge && <img className='badge' src="/assets/image/badge_tri_gradient.png"/>}
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
      }
    return (
        <ScactBlock>
             <div className="title">새로운 소식</div>
            <div className='container'>
           
                {renderedNews}
            </div>
           <div className='mo'> <a href="/"><div className="more"><p>더보기 <MdOutlineArrowRight /></p></div></a></div>
        </ScactBlock>
    );
};

export default Scact;