import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'; // React Router의 Link 추가

const ApplicationSectionBlock = styled.div`
    h3 {
        text-align: center;
        font-size: 20px;
        margin: 50px 0;
    }
    .application__wrap {
        .application__type {
          display: flex;
          justify-content: center;
          border-bottom:1px solid #000;
          li{ list-style:none;
          a {
            text-align: center;
            width:300px;
            font-size:25px;
            margin:0 100px;
            padding-bottom: 15px;
          
            background:#fff;
            border-bottom:0px solid #000;
            &.on {
                background:#fff;
                color:#ffa70e;
                border-bottom:5px solid #ffa70e;
                font-weight:700;
            }
          }
        }
        }
        .application__member {
            text-align: center;
        
           
            .member__info {
         
           
              a { display: block;
                cursor: default; /* 원하는 마우스 커서 스타일로 변경하세요 */
                .member__photo { 
                   
                    img { width: 32%;
                        margin:30px auto; }
                        .tit{    font-size:32px;
                            font-weight:500;
                               color:#000;
                               margin:30px 0;

                               .t1{
                                background-color: rgb(255, 198, 156);
                                color:#000;
                                font-weight:800;
                               }
                               .t2{
                                background-color: rgb(255, 231, 206);
                                color:#000;
                                font-weight:800;
                               }

                        }
                        .tit2{    font-size:20px;
                            font-weight:500;
                               color:#000;
                               margin:40px 0;

                               .t1{
                                background-color: rgb(247, 198, 206);
                                color:#000;
                                font-weight:800;
                               }
                               .t2{
                                background-color: rgb(255, 239, 198);
                                color:#000;
                                font-weight:800;
                               }
                               .t3{
                                background-color: rgb(214, 239, 214);
                                color:#000;
                                font-weight:800;
                               }

                        }
                        .tit3 a{
                            cursor:pointer;
                        }
                        .tit4 a{
                            cursor:pointer;
                        }
                        .lang
                        img{
                            width:52%;
                            }
                        }
                     }
              }
            }
        }


        @media (max-width:768px) {
         
            
            h3 {
                text-align: center;
                font-size: 20px;
                margin: 50px 0;
            }
            .application__wrap {
                .application__type {
                  display: flex;
                  justify-content: center;
                  border-bottom:1px solid #000;
                  li{list-style:none;
                    width:49%;
                    
                  a {
               
                    width:95%;
                    font-size:25px;
                    margin:0 5px;
                    padding-bottom: 10px;
                  
                    background:#fff;
                    border-bottom:0px solid #000;
                    &.on {
                        background:#fff;
                        color:#ffa70e;
                        border-bottom:5px solid #ffa70e;
                        font-weight:700;
                       
                    }
                }
                  }
                }
                .application__member {
                    text-align: center;
                
                   
                    .member__info {
                 
                   
                      a { display: block;
                        .member__photo { 
                           
                            img { width: 32%;
                                margin:30px auto; }
                                .tit{    font-size:30px;
                                    font-weight:500;
                                       color:#000;
                                       margin:30px 0;
                                       padding:0 6px;
        
                                       .t1{
                                        background-color: rgb(255, 198, 156);
                                        color:#000;
                                        font-weight:800;
                                       }
                                       .t2{
                                        background-color: rgb(255, 231, 206);
                                        color:#000;
                                        font-weight:800;
                                       }
        
                                }
                                .tit2{    font-size:18px;
                                    font-weight:500;
                                       color:#000;
                                       margin:40px 0;
                                       padding:0 10px;
        
                                       .t1{
                                        background-color: rgb(247, 198, 206);
                                        color:#000;
                                        font-weight:800;
                                       }
                                       .t2{
                                        background-color: rgb(255, 239, 198);
                                        color:#000;
                                        font-weight:800;
                                       }
                                       .t3{
                                        background-color: rgb(214, 239, 214);
                                        color:#000;
                                        font-weight:800;
                                       }
        
                                }
                                .lang
                                img{
                                    width:80%;
                                    }
                                }
                             }
                      }
                    }
                }
        

            
        }
    }
`

const ApplicationSection = () => {

    const [active, setActive] = useState(0)

    const applicationMenu = [
        {menu: '대회안내',   id:0 },
        {menu: '플레이어즈',   id:1 },
    
       
    ]

    const handleClick = (id) => {
        setActive(id);
    };

    const applicationData = {
        0 : [ 
          { applicationImg: './assets/image/app_logo.png',  link: '#' },
          
      
       
     
     
        ],
        1 : [ 
           
        
        
        ],
       
       
    }


    return (
        <ApplicationSectionBlock className='row'>
            {/* <h3>{ applicationMenu[active].menu }</h3> */}
            <div className="application__wrap">
                <div className="application__type">
                {applicationMenu.map((item) => (
                  <li>
                        <Link
                        key={item.id}
                        to={item.id === 0 ? '/application' : '/boardList'}
                        className={active === item.id ? 'on' : ''} // active 상태 확인하여 'on' 클래스 추가
                        onClick={() => handleClick(item.id)}
                    >
                        {item.menu}
                    </Link>
                  </li>
                    ))}
                </div>
                <div className="application__member">
                    {
                        applicationData[active].map((item, index)=>(
                            <div className="member__info" key={index}>
                                <a href={item.link}>
                                    <figure className="member__photo">
                                        <img src={item.applicationImg} data-aos="fade-down" />
                                        <div className="tit" data-aos="fade-up">포켓몬 카드 게임을 하고 포인트를 모아보아요! <br/>포인트를 쌓으면 <span className='t1'>랭킹</span>도 올라가고, <span className='t2'>상품</span>도 교환할 수 있어요!</div>
                                        <div className="tit2">포켓몬스쿨과 공인 카드샵 미니리그에서 얻을 수 있는 포인트로 <br/>
랭킹 순위를 정하는데 필요한 <span className='t1'>랭킹 포인트 (RP) </span>와 <br/>
포인트를 모아서 경품을 교환할 수 있는 <span className='t2'>포켓몬 카드 게임 포인트 (PP)</span>가 있습니다. <br/>

상위 포인트 획득자는 포켓몬 공식 사이트 메인 랭킹에서 확인 할 수 있습니다. <br/>
랭킹 포인트를 모아 포켓몬 카드 게임 플레이어의 정상에 도전해보세요.<br/>

랭킹 포인트와 포켓몬 카드 게임 포인트 외<br/>
코리안리그 상위 입상을 통해 모은 승점을 통해<br/>
포켓몬 월드챔피언십에 진출할 수 있는 특별한  <span className='t3'>코리안리그 포인트(KP)</span> 도 있습니다. </div>
<div className="pt1" data-aos="zoom-in"><img src="./assets/image/app_logo2.png" alt="" />
</div>
<div className="tit3"><a href='/boardList'>[포켓몬 월드챔피언십2019 바로가기]</a></div>
<div className="pt2" data-aos="zoom-in"><img src="./assets/image/app_logo3.png" alt="" /></div>
<div className="tit4"><a href='/boardList'>[포켓몬 월드챔피언십2019 바로가기]</a></div>
<div className="lang"><img src="./assets/image/app_txt.png" alt="" /></div>


                                    </figure>
                                    {/* <div className="member__desc">
                                        <h4>{item.title}</h4>
                                    </div> */}
                                </a>
                            </div>
                        ))
                    }
                </div>    
            </div>
        </ApplicationSectionBlock>
    );
};

export default ApplicationSection;