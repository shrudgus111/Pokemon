import React, { useState, useRef, useEffect } from 'react';
import { fetchProducts, addToCart } from '@/store/product'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { BsCartPlusFill, BsCartPlus } from "react-icons/bs";
import { ImSpinner } from "react-icons/im";
import { Link } from 'react-router-dom'
import { RiShoppingBag3Fill } from "react-icons/ri";


const ProductSectionBlock = styled.div`
  .info p {
    font-size: 17px;
    font-weight: 800;
    text-overflow: ellipsis;
    text-align: center;
  }
  .info .dam {
    margin-top: 6px;
    text-align: center;
    background: #343434;
    padding: 11px 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background: #343434;
      color: #fff;
      font-size: 16px;
    }
    span {
      margin-left: 6px;
    }
  }

  /* Modal CSS */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color:#1d1d1d;
  margin: 15% auto;
  padding: 20px 30px;
  border: 1px solid #888;
  width: 80%;
  
  color:#fff;
  .co2{ display:flex;
    justify-content: center;
    align-items: center;
  img{width:40%;}
  .mk{ 
  p{  font-size: 30px;
    font-weight:900;
    color:#fff;
    margin:32px 0}
    .dam2 {
        margin-top: 6px;
        text-align: center;
        background: #fff;
        padding: 11px 5px;
        color: #000;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background: #fff;
          color: #000;
          font-size: 16px;
        }
        span {
          margin-left: 6px;
        }
      }
  .tx{ font-size: 13px;
margin-top:30px;}
  }
  }
}

/* Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 34px;
  font-weight: bold;
  background:#fff;
  text-align: center;
  border-radius:50%;
  width:40px;
  height:33px;
 line-height:28px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`

const UlBlock = styled.ul`
  border: 0px solid #000;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 50px;
`

const ListBlock = styled.li`
  flex: 0 0 21%;
  margin: 20px 2%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* 그림자 효과 추가 */

  .photo {
    cursor: pointer;
    transition: transform 0.5s ease; /* transform에 전환 추가 */
  }

  &:hover .photo {
    transform: rotate(20deg) scale(1.1); /* 호버 시 이미지를 20도 회전하고 약간 확대 */
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명 배경 추가 */
    color: #fff;
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease; /* transform에 전환 추가 */
    visibility: hidden;
    opacity: 0;
  }

  &:hover .info {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  .info p {
    margin: 5px 0;
    font-size: 14px;
  }
`;

const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  .loadIcon {
    font-size: 80px;
    animation: loadSpin 5s linear infinite;
  }
  @keyframes loadSpin {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(3turn)
    }
  }
`

const ButtonBlock = styled.div`
  button {
    margin: 50px 5px;
    padding: 5px 10px;
    &.on {
      background: red;
      color: #fff
    }
  }
`

const ProductSection = ({ title }) => {
  const dispatch = useDispatch();

  const carts = useSelector(state => state.products.carts)
  const allData = useSelector(state => state.products.products)

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(allData)
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item
 
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/close

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    if (allData.length > 0) {
      setLoading(true)
      if (title === '전체상품') {
        setProducts(allData)
      } else {
        setProducts(allData.filter((item) => item.category === title))
      }
    }
  }, [allData, title])

  const cartIdCount = (id) => {
    let item = carts.find(value => value.id == id)
    if (item) {
      return item.qty
    } else {
      return 0
    }
  }
  

// photo 클릭 시에만 모달이 열리도록 handleItemClick 수정
const handleItemClick = (event, item) => {
    event.preventDefault(); // Link 컴포넌트의 기본 동작인 페이지 이동을 방지
    setSelectedItem(item);
    setModalOpen(true); // Open modal when photo is clicked
}
const closeModal = () => {
    setModalOpen(false); // Close modal
    setSelectedItem(null); // Clear selected item
}

  const Modal = ({ item, onClose }) => {
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
         <div className='co2'>
              <img src={item.image} />
             <div className='mk'>
                  <p><a href="#">{item.title}</a></p>
                  <div className='dam2'>
                    {item.inventory !== cartIdCount(item.id) ? <button onClick={() => dispatch(addToCart(item.id))}><RiShoppingBag3Fill /></button> : <button><BsCartPlus /></button>}
                    {item.inventory !== cartIdCount(item.id) ? <span>{item.inventory - cartIdCount(item.id)}개 남았습니다!!!!!</span> : <span>품절!!</span>}
                  </div>
                   <ul className='tx'>
                     <li><b>발매일</b> 2024-03-06                                    </li>                                                                    <li><b>가격</b> 1,000원(1팩), 30,000원(1상자)                                    </li>                                                                    <li><b>구성물</b> 1팩 : 5장 / 1상자 : 30팩 (카드 150장)                                    </li>                                                                    <li><b>주의</b> *한 팩에는 무작위로 5장의 카드가 들어 있으며, 제품의 특성상 동일한 카드가 연속하여 나오거나, 전 종의 카드를 모으기 어려운 경우가 있습니다. *점포에 따라 1상자(30팩) 단위로 판매하는 곳도 있습니다.                                    </li>                            </ul>
             </div>
         </div>
          {/* Add more details or customizations as needed */}
        </div>
      </div>
    );
  };
  

  if (!loading) {
    return (
      <ProductSectionBlock className='row'>
        <LoadingBlock>
          <ImSpinner className="loadIcon" />
        </LoadingBlock>
      </ProductSectionBlock>
    );
  } else {
    return (
      <ProductSectionBlock className='row'>
        <ButtonBlock>
          {/* Sorting buttons */}
        </ButtonBlock>
        <UlBlock>
          {
            products.map((item, index) => (
                <ListBlock key={index} > {/* Attach click event */}
                <div className="photo" onClick={(e) => handleItemClick(e, item)}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="info">
                  <p><a href="#">{item.title}</a></p>
                  <p>{item.price.toLocaleString()}</p>
              
                  <div className='dam'>
                    {item.inventory !== cartIdCount(item.id) ? <button onClick={() => dispatch(addToCart(item.id))}><RiShoppingBag3Fill /></button> : <button><BsCartPlus /></button>}
                    {item.inventory !== cartIdCount(item.id) ? <span>{item.inventory - cartIdCount(item.id)}개 남았습니다!!!!!</span> : <span>품절!!</span>}
                  </div>
                </div>
              </ListBlock>
            ))
          }
        </UlBlock>
        {/* Modal component */}
        {modalOpen && selectedItem && (
        <Modal item={selectedItem} onClose={closeModal} />
      )}
    </ProductSectionBlock>
        );
    }
};

export default ProductSection;