import React from 'react';
import styled from 'styled-components'


const GridBlock=styled.div`
margin:50px auto;
overflow: hidden;
.sec1{
    padding:20px;
    display:flex;
    
    // justify-content: center;
    

    .three{position:relative;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        
      
     :before{
        content: '';
        position: absolute;
        top: -20px;
        bottom: -20px;
        z-index:-1;
        left: 20px;
        right: -20px;
        border: 1px solid #d5d5d5;
     }

     .bm{
        background:#fee682;
        padding:5px 26px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:20px 0 12px 0;

        .p1{
            font-weight:700;
            font-size:16px;
            margin:3px 0;
        }
        h3{
            font-weight:800;
            font-size:25px;
        }
     }
     .bm2{
        background:#dbdcdc;
        padding:5px 26px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    

        .p1{
            font-weight:700;
            font-size:16px;
            margin:3px 0;
        }
        h3{
            font-weight:800;
            font-size:25px;
        }
     }
     .bm3{
        background:#fee682;
        padding:5px 26px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:12px 0;

        .p1{
            font-weight:700;
            font-size:16px;
            margin:3px 0;
        }
        h3{
            font-weight:800;
            font-size:25px;
        }
     }

    }

    .ur{
        margin:0 0 0 60px;
        position:relative;
        flex: 0 0 60.666667%;
        max-width: 60.666667%;

        :before{
            content: '';
            position: absolute;
            top: -20px;
            bottom: -20px;
            z-index:-1;
            left: -29px;
            right: -29px;
            border: 1px solid #d5d5d5;
         }

         .tit{font-size:1.625em;
        font-weight:800;
        margin-top:20px;
        
        
        
        :before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            border-left: 4px solid #cfcfcf;
    }
    }
    }


}

@media (max-width:1023px) {



    
overflow: none;
.sec1{
    padding:20px;
    display:block;
    
  // justify-content: center;
    

  .three{position:relative;
    flex: 0 0 100%;
    max-width: 100%;
    
  
 :before{
    content: '';
    position: absolute;
    top: -20px;
    bottom: -20px;
    z-index:-1;
    left: 20px;
    right: -20px;
    border: 1px solid #d5d5d5;
 }

 .bm{
    background:#fee682;
    padding:5px 26px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:20px 0 12px 0;

    .p1{
        font-weight:700;
        font-size:16px;
        margin:3px 0;
    }
    h3{
        font-weight:800;
        font-size:25px;
    }
 }
 .bm2{
    background:#dbdcdc;
    padding:5px 26px;
    display:flex;
    justify-content:space-between;
    align-items:center;


    .p1{
        font-weight:700;
        font-size:16px;
        margin:3px 0;
    }
    h3{
        font-weight:800;
        font-size:25px;
    }
 }
 .bm3{
    background:#fee682;
    padding:5px 26px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:12px 0;

    .p1{
        font-weight:700;
        font-size:16px;
        margin:3px 0;
    }
    h3{
        font-weight:800;
        font-size:25px;
    }
 }

}

    .ur{
        margin:0 0 0 0px;
        position:relative;
        display:block;
        width: 100%;
        max-width:100%;

    
        .mo {
            width: 100%;
            height: 0;
            padding-top: 56.25%; /* 16:9 비율 비디오의 높이를 조정합니다. */
            position: relative;
            overflow: hidden;
        }
        
        .mo iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain; /* 비디오가 잘릴 때 전체 비디오를 보존하고 화면에 맞게 조정됩니다. */
        }

        :before{
            display:none;
         }

         .tit{font-size:16px;
        font-weight:800;
        margin-top:20px;
        
        
        
        :before{
            display:none;
    }
    }
    }


}
    
}


`

const Grid = () => {
    return (
        <GridBlock className='row'>
            <div className="sec1">
                <div className="three">
                    <div className='bm'> 
                        <div className='tt'>
                            <p className='p1'>포켓몬 카드 게임</p>
                            <h3>자판기</h3>
                        </div>
                        <a href='/'><img src="./assets/image/c1.png" alt="" />
                        </a>
                        </div>
                        <div className='bm2'> 
                        <div className='tt'>
                            <p className='p1'>포켓몬 카드 게임</p>
                            <h3>포켓몬스쿨</h3>
                        </div>
                        <a href='/'><img src="./assets/image/c3.png" alt="" />
                        </a>
                        </div>
                        <div className='bm3'> 
                        <div className='tt'>
                            <p className='p1'>포켓몬 카드 게임</p>
                            <h3>포켓몬 카드샵</h3>
                        </div>
                        <a href='/'><img src="./assets/image/c1.png" alt="" />
                        </a>
                        </div>
                </div>
                <div className="ur">
                    <div className="mo"><iframe width="100%" height="500" src="https://www.youtube.com/embed/vJoCo_2UeNI?si=d37QSQacLOuPicL5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="tit">포켓몬 카드 게임 스칼렛&바이올렛 확장팩 「와일드포스」 「사이버저지」</div>
                </div>
            </div>
        </GridBlock>
    );
};

export default Grid;