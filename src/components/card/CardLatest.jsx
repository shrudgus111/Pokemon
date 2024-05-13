import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { useDispatch } from 'react-redux';
import { getSeries } from '@/store/card';

const Animation = keyframes`
0%, 100%{
    transform: scale(1);
}
50% {
    transform: scale(1.1);
}
`

const CardLatestBlock = styled.div`
    height: 60%;
    background: #242424;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: -29px;
        left: 0;
        right: 0;
        width: 100%;
        height: 29px;
        background-size: cover;
        background-image: url(/src/assets/image/bg_top_dark.png);
        background-repeat: no-repeat;
    }
}
    .card_pack {
        max-width: 1250px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .left,
        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width: 30%;
            z-index: 2;
            @media(max-width:700px){
                width: 240px;
            }
            img{
                width: 100%;
            }
            .deckname {
                width: 100%;
                transition: all 0.2s;
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
        .left.active > .deckname {
            animation: ${Animation} 2s infinite; /* 애니메이션 적용 */
        }
        .right.active > .deckname {
            animation: ${Animation} 2s infinite; /* 애니메이션 적용 */
        }
        .left:hover .detail1 {
            opacity: 1;
            @media(max-width:1550px) {
                opacity: 0;
            }
        }
        .right:hover .detail2 {
            opacity: 1;
            @media(max-width:1550px) {
                opacity: 0;
            }
        }
        .detail1 {
            position: absolute;
            left: -100%;
            top: 22%;
            transition: all 0.4s ease-in-out;
            z-index: 0;
            opacity: 0;
            width: 90%;
            
            .image1 {
                width: 50%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image2 {
                width: 50%;
                position: absolute;
                top: -10%;
                left: 33%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image3 {
                width: 50%;
                position: absolute;
                left: 70%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
        }
        .detail2 {
            position: absolute;
            right: -93%;
            top: 15%;
            transition: all 0.5s ease-in-out;
            z-index: 0;
            opacity: 0;
            width: 100%;
            .image1 {
                width: 50%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image2 {
                width: 50%;
                position: absolute;
                top: -10%;
                left: 26%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image3 {
                width: 50%; 
                position: absolute;
                left: 56%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
        }

    }
`;

const CardLatest = () => {
    const dispatch = useDispatch();
    const [activeDeck, setActiveDeck] = useState("old");

    const handleClick = (series) => {
        window.scrollTo({ top: -500, behavior: 'smooth' });
        dispatch(getSeries(series));
        setActiveDeck(series);
        console.log(series)
    };

    return (
        <CardLatestBlock className='first'>
            <div className='card_pack'>
                <div className={`left ${activeDeck === "old" ? 'active' : ''}`}>
                    <img className='deckname' onClick={() => handleClick("old")} src="/src/assets/image/pr1.png" alt="" />
                    <img className='logo1' src="/src/assets/image/코라이돈.png" alt="" />
                    <div className='detail1'>
                        <img className='image1' src="/src/assets/card_img/SV5K_052.png" alt="" />
                        <img className='image2' src="/src/assets/card_img/SV5K_024.png" alt="" />
                        <img className='image3' src="/src/assets/card_img/SV5K_053.png" alt="" />
                    </div>
                </div>
                <div className={`right ${activeDeck === "new" ? 'active' : ''}`}>
                    <img className='deckname' onClick={() => handleClick("new")} src="/src/assets/image/pr2.png" alt="" />
                    <img className='logo2' src="/src/assets/image/미라이돈.png" alt="" />
                    <div className='detail2'>
                        <img className='image1' src="/src/assets/card_img/SV5M_052.png" alt="" />
                        <img className='image2' src="/src/assets/card_img/SV5M_035.png" alt="" />
                        <img className='image3' src="/src/assets/card_img/SV5M_016.png" alt="" />
                    </div>
                </div>
            </div>
        </CardLatestBlock>
    );
};

export default CardLatest;