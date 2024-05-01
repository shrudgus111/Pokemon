import React from 'react';
import styled from 'styled-components';
import eventData from '@/assets/data/event'

const EventListBlock = styled.div`
width: 100%;
height: 100%;
padding: 5%;
    .bg {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        gap: 15px;
        .list {
            flex: 0 0 24%;
            padding: 10px;
            background: #fff;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            height: 350px;
            &:hover {
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
            }
            .container {
                img {
                    height: 255px;
                    line-height: 255px;
                }
                h4 {
                    margin-top: 15px;
                    font-size: 14px;
                    font-weight: 700;
                    word-spacing: -0.1rem;
                    letter-spacing: -0.04em;
                    color: #454545;
                    height: 50px;
                }
            }
        }
    }
`

const EventList = () => {
    const FixedData = eventData

    return (
        <EventListBlock>
            <div className='bg'>
                {FixedData.map((item, index) => (
                    <div className='list' key={index}>
                        <div className='container'>
                            <img src={item.img} alt={item.title} />
                            <h4 className='title'>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </EventListBlock>
    );
};

export default EventList;