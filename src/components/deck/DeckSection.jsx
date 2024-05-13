import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { noticeDB, reviewDB } from '@/assets/firebase';


const DeckSectionBlock = styled.div`
  .deck__wrap {
    margin: 0 auto;
    text-align: center;
    .pak {
      text-align: center;
      img {
        width: 55%;
      }
    }
    .dackcv {
      margin: 40px;
     .deck-link{
      font-size:27px;
      font-weight:800;
      color:#9b43ff;
     
     }

     
    }
    .btn {
      display: none;
      text-align: center;
      margin-top: 20px;
      a {
        margin: 0 10px;
        padding: 20px 0;
        background: #ddd;
        font-size: 14px;
      }
    }
  }
  .no{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 0 13%;
      margin:10px -10px;
      img{width:100%;}
     
    }
  }
  .kang{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 0 13%;
      margin:10px -10px;
      img{width:100%;}
     
    }
  }
  .no li, .kang li {
    flex: 0 0 13%;
    margin: 10px -10px;
    padding: 10px;
    transition: background-color 0.3s, transform 0.3s; /* 마우스 호버 효과 */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }
  
  .no li:hover, .kang li:hover {
    background-color: #9b43ff; /* 배경색 변경 */
    transform: scale(1.1); /* 크기 변환 */
  }

  .no li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  
  .kang li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .no li img, .kang li img {
    width: 100%;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)); /* 그림자 효과 */
  }
  
  .deck-link {
    font-size: 27px;
    font-weight: 800;
    color: #9b43ff;
    text-decoration: none;
    transition: transform 0.3s; /* 텍스트 효과 */
  }
  
  .deck-link:hover {
    transform: translateY(-3px); /* 텍스트 위로 이동 */
  }
  @media (max-width:768px) {
    .deck__wrap {
      margin: 0 auto;
      text-align: center;
      .pak {
        text-align: center;
        img {
          width: 80%;
        }
      }
      .dackcv {
        margin: 40px;
       .deck-link{
        font-size:22px;
        font-weight:800;
        color:#9b43ff;
       
       }
  
       
      }
      .btn {
        display: none;
        text-align: center;
        margin-top: 20px;
        a {
          margin: 0 10px;
          padding: 20px 0;
          background: #ddd;
          font-size: 14px;
        }
      }
    }
    .no{
      margin-top:40px;
      max-width:1200px; 
      background:#f7f7f7;
      border:1px solid #ddd;
      margin:auto;
      padding:30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap:wrap;
      li{
        flex:0 0 13%;
        margin:10px -10px;
        img{width:100%;}
       
      }
    }
    .kang{
      margin-top:40px;
      max-width:1200px; 
      background:#f7f7f7;
      border:1px solid #ddd;
      margin:auto;
      padding:30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap:wrap;
      li{
        flex:0 0 13%;
        margin:10px -10px;
        img{width:100%;}
       
      }
    }
    .no li, .kang li {
      flex: 0 0 33.33%;
      margin: 10px -25px;
      padding: 10px;
      transition: background-color 0.3s, transform 0.3s; /* 마우스 호버 효과 */
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    }
    
    .no li:hover, .kang li:hover {
      background-color: #9b43ff; /* 배경색 변경 */
      transform: scale(1.1); /* 크기 변환 */
    }
  
    .no li:hover {
      animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
    }
    
    
    .kang li:hover {
      animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
    }
    
    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .no li img, .kang li img {
      width: 100%;
      filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)); /* 그림자 효과 */
    }
    
    .deck-link {
      font-size: 27px;
      font-weight: 800;
      color: #9b43ff;
      text-decoration: none;
      transition: transform 0.3s; /* 텍스트 효과 */
    }
    
    .deck-link:hover {
      transform: translateY(-3px); /* 텍스트 위로 이동 */
    }
}

@media (max-width:699px) {
  .no{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 42.33%;
      margin:10px 1px;
      img{width:100%;}
     
    }
  }
  .kang{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 0 42.33%;
      margin:10px 1px;
      img{width:100%;}
     
    }
  }
  .no li, .kang li {
    flex: 0 0 42.33%;
    margin: 10px 1px;
    padding: 10px;
    transition: background-color 0.3s, transform 0.3s; /* 마우스 호버 효과 */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }
  
  .no li:hover, .kang li:hover {
    background-color: #9b43ff; /* 배경색 변경 */
    transform: scale(1.1); /* 크기 변환 */
  }

  .no li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  
  .kang li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .no li img, .kang li img {
    width: 100%;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)); /* 그림자 효과 */
  }
  
  .deck-link {
    font-size: 27px;
    font-weight: 800;
    color: #9b43ff;
    text-decoration: none;
    transition: transform 0.3s; /* 텍스트 효과 */
  }
  
  .deck-link:hover {
    transform: translateY(-3px); /* 텍스트 위로 이동 */
  }
}
}
}
}
`;

const DeckSection = ({ post }) => {
  const user = useSelector(state => state.members.user);
  const type = useSelector(state => state.boards.type);
  const navigate = useNavigate();

  const onRemove = e => {
    e.preventDefault();
    if (type === '관리자') {
      noticeDB.child(post.key).remove();
    } else if (type === '유저') {
      reviewDB.child(post.key).remove();
    }
    navigate('/boardList');
  };

  // useEffect(() => {
  //   if (type === '관리자') {
  //     noticeDB.child(post.key).update({
  //       hit: post.hit + 1
  //     });
  //   } else {
  //     reviewDB.child(post.key).update({
  //       hit: post.hit + 1
  //     });
  //   }
  // }, []);

 // 노경현과 강명수에 대한 이미지 렌더링 함수
 const renderImage = () => {
    if (post.subject === '노경현') {
      return <ul className='no'>
       <li><img src="/assets/card_img/S1W_001.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5K_024.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/S9a_006.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5K_033.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/S9a_006_m.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5K_042.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/S9a_007_m.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5K_051.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/S9a_068.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5K_052.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV4a_025.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5M_030.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV4a_055.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5M_036.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV4a_210.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5M_051.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV4a_236.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5M_052.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SV5K_012.png" alt="노경현" /></li>
       <li><img src="/assets/card_img/SVG_014.png" alt="노경현" /></li>
        </ul>
    } else if (post.subject === '강명수') {
      return <ul className="kang">
       <li><img src="/assets/card_img/SV4a_025.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5M_030.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV4a_055.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5M_036.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV4a_210.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5M_051.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV4a_236.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5M_052.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5K_012.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SVG_014.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/S1W_001.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5K_024.png"  alt="강명수" /></li>
       <li><img src="/assets/card_img/S9a_006.png"   alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5K_033.png"  alt="강명수" /></li>
       <li><img src="/assets/card_img/S9a_006_m.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5K_042.png"  alt="강명수" /></li>
       <li><img src="/assets/card_img/S9a_007_m.png" alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5K_051.png"  alt="강명수" /></li>
       <li><img src="/assets/card_img/S9a_068.png"   alt="강명수" /></li>
       <li><img src="/assets/card_img/SV5K_052.png"  alt="강명수" /></li>
      </ul>
    } else {
      return null; 
    }
  };

 
  return (
    <DeckSectionBlock>
          {/* 이미지 렌더링 */}
     
      <div className="deck__wrap">
        <div className="pak" >
          <img src="/assets/image/dack2.jpg" alt="" data-aos="flip-left" data-aos-delay="100"
        data-aos-duration="500" />
        </div>
       
        <div className="dackcv">
        <td className='deck-link'><Link to={`/deck/${post.subject}`} state={{ post: post }}>{post.subject}선수 / 로스트존덱</Link></td>
        {renderImage()}
        </div>
        <div className="btn">
          {user && post.writer === user.userId && (
            <>
              <Link to={`/boardModify/${post.subject}`} state={{ post: post }}>
                수정
              </Link>
              <a href="#" onClick={onRemove}>
                삭제
              </a>
            </>
          )}
          <Link to="/boardList">목록</Link>
        </div>
      </div>
    </DeckSectionBlock>
  );
};

export default DeckSection;