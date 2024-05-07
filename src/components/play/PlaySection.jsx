import React, {useState} from 'react';
import styled from 'styled-components'

const PlaySectionBlock= styled.div`
h3 {
    text-align: center;
    font-size: 20px;
    margin: 50px 0;
}
.play__wrap {
    .play__type {
      display: flex;
      justify-content: center;
      border-bottom:1px solid #000;
      button {
        width:300px;
        font-size:25px;
        margin:0 100px;
        padding-bottom: 15px;
      
        background:#fff;
        border-bottom:1px solid #000;
        &.on {
            background:#fff;
            color:#ffa70e;
            border-bottom:5px solid #ffa70e;
            font-weight:700;
        }
        
      }
    }
    .play__member {
        text-align: center;
    
       
        .member__info {
            p{
                margin:40px 0;
                font-size:35px;
                font-weight:800;
                color:rgb(57, 132, 198);
            }
     
       
          a { display: block;
            cursor: default; /* 원하는 마우스 커서 스타일로 변경하세요 */
              
            .member__photo { 
                  border:1px solid #34b1c4;
                  margin:50px 0;

               
                img { width: 32%;
                    margin:30px auto; }
                    .tit{    font-size:20px;
                        font-weight:500;
                           color:#858585;
                           margin:30px 0 10px 0;

                           

                    }
                    .tit2{    font-size:20px;
                        font-weight:500;
                           color:#858585;
                           margin:10px 0 40px 0;

                          

                    }
                    .pt1 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                      .pt2 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                      .pt3 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                      .pt4 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
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
}

`

const PlaySection = () => {

    const [active, setActive] = useState(0)

    const playMenu = [
        {menu: '놀이방법 영상',   id:0 },
      
    
       
    ]

    const playData = {
        0 : [ 
          { title:'놀이방법 영상',  link: '#' },
          
      
       
     
     
        ],
       
       
       
    }

    return (
        <PlaySectionBlock className='row'>
                {/* <h3>{ applicationMenu[active].menu }</h3> */}
                <div className="play__wrap">
                <div className="play__type">
                    {
                        playMenu.map((item, index)=><button key={index} onClick={()=>{setActive(item.id)}} className={ active===item.id && 'on' }>{item.menu}</button>)
                    }
                </div>
                <div className="play__member">
                    {
                        playData[active].map((item, index)=>(
                            <div className="member__info" key={index}>
                                <a href={item.link}>
                                    <figure className="member__photo">
                                        <p>{item.title} </p>
                                        <div className="tit">포켓몬 카드 게임의 기본 룰을 알기 쉽게 알려주는</div>
                                        <div className="tit2">「포켓몬 카드 게임 놀이방법 영상」과 함께 포켓몬 카드 게임을 알아보아요! </div>
<div className="pt1"><iframe width="100%" height="515" src="https://www.youtube.com/embed/OdR51NdHt5g?si=a4yi4k5ONVK2Df6n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div className="pt2"><iframe width="70%" height="515" src="https://www.youtube.com/embed/vJoCo_2UeNI?si=KNlws8ZktyDwD6Ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<div className="pt3"><iframe width="70%" height="515" src="https://www.youtube.com/embed/yKie0cPHyVQ?si=mTlXEWLnc233ElSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<div className="pt4"><iframe width="70%" height="515" src="https://www.youtube.com/embed/2kFuT2CGOTI?si=H8EFzjbue6lYuZF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>




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
        </PlaySectionBlock>
    );
};

export default PlaySection;