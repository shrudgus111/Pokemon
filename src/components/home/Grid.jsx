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

     li{
        padding:3px 0;
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

         .tit{font-size:24px;
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


`

const Grid = () => {
    return (
        <GridBlock className='row'>
            <div className="sec1">
                <ul className="three">
                    <li> <a href='/'><img src="./assets/image/su1.PNG" alt="" /></a></li>
                    <li><a href='/'><img src="./assets/image/su2.PNG" alt="" /></a></li>
                    <li><a href='/'><img src="./assets/image/su3.PNG" alt="" /></a></li>
                </ul>
                <div className="ur">
                    <div className="mo"><iframe width="100%" height="500" src="https://www.youtube.com/embed/vJoCo_2UeNI?si=d37QSQacLOuPicL5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    <div className="tit">포켓몬 카드 게임 스칼렛&바이올렛 확장팩 「와일드포스」 <br />「사이버저지」</div>
                </div>
            </div>
        </GridBlock>
    );
};

export default Grid;