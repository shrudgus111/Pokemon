import React, {useState} from 'react';
import styled from 'styled-components';
import eventData from '@/assets/data/event'

const EventListBlock = styled.div`
width: 100%;
padding: 5%;
    .bg {
        display: flex;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
        gap: 10px;
        @media (max-width:993px) {
            gap: 5px;
            justify-content: normal;
        }
        .list {
            flex: 0 0 24%;
            padding: 10px;
            background: #fff;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            @media (max-width:993px) {
                flex: 0 0 48%;
            }
            &:hover {
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
            }
            .container {
                .image_container{
                    img {
                        width: 100%;
                        height: 100%;
                    }
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
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background: #1D1D1D;
  padding: 50px;
  border-radius: 10px;
  display: flex;
   .text {
    color: #fff;
    margin-left: 30px;
   }
   img {
    width: 400px;
    border: 5px solid #fff;
   }
`;

const Modal = ({ onClose, event }) => {
    return (
      <ModalOverlay onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <img src={event.img} alt={event.title} />
            <div className='text'>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
            </div>
        </ModalWrapper>
      </ModalOverlay>
    );
  };


const EventList = () => {
    const FixedData = eventData;
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openModal = (event) => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    }
    

    return (
        <EventListBlock>
            <div className='bg' data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                {FixedData.map((item, index) => (
                    <div className='list' key={index} onClick={()=> openModal(item)}>
                        <div className='container'>
                            <div className='image_container'>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h4 className='title'>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
            {selectedEvent && <Modal onClose={closeModal} event={selectedEvent}/>}
        </EventListBlock>
    );
};

export default EventList;