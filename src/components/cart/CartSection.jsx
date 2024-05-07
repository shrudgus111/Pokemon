import React from 'react';
import styled from 'styled-components'
import {useSelector, useDispatch } from 'react-redux'
import { qtyUpdate, removeCartItem } from '@/store/product'

const TableBlock = styled.table`
// table-layout: fixed;
background: linear-gradient(to bottom, #FFDE00, #FFAC00); /* 그라데이션 배경 추가 */
border: 2px solid #FFAC00; /* 실선 테두리 추가 */
  border-radius: 15px; /* 둥근 테두리 적용 */
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); /* 그림자 효과 추가 */
transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
color: #000; /* 글꼴 색상 변경 */
font-family: 'Arial', sans-serif; /* 글꼴 변경 */
cursor: pointer; /* 마우스 커서 변경 */
transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
col:nth-child(1) { width: 100px; }
col:nth-child(2) { width: auto; }
col:nth-child(3) { width: 100px; }
col:nth-child(4) { width: 100px; }
col:nth-child(5) { width: 100px; }
th,
  td {
    padding: 7px;
  }
  tbody {
    td:nth-child(3) {
      text-align: center;
      input {
        border: 1px solid #000;
        text-align: center;
        padding: 5px 0;
        width: 50px;
      }
    }
    td:nth-child(4) {
      text-align: right;
    }
    td:nth-child(5) {
      text-align: center;
      button {
        padding: 5px 8px;
        border-radius: 3px;
        background: blue;
        color: #fff;
      }
    }
  }
  tfoot {
    td {
      text-align: center;
    }
  }
 
  &:hover {
    transform: scale(1.05); /* 호버 시 크기 확대 효과 추가 */
  }


  @media (max-width:768px) {
    width:100%;
    table-layout: auto; 
    background: linear-gradient(to bottom, #FFDE00, #FFAC00); /* 그라데이션 배경 추가 */
    border: 2px solid #FFAC00; /* 실선 테두리 추가 */
      border-radius: 15px; /* 둥근 테두리 적용 */
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); /* 그림자 효과 추가 */
    transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
    color: #000; /* 글꼴 색상 변경 */
    font-family: 'Arial', sans-serif; /* 글꼴 변경 */
    cursor: pointer; /* 마우스 커서 변경 */
    transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
    col:nth-child(1) { width: 100px; }
    col:nth-child(2) { width: auto; }
    col:nth-child(3) { width: 100px; }
    col:nth-child(4) { width: 100px; }
    col:nth-child(5) { width: 100px; }
    th,
      td {
        padding: 7px;
      }
      tbody {
        width:100%;
        td:nth-child(3) {
          text-align: center;
          input {
            border: 1px solid #000;
            text-align: center;
            padding: 5px 0;
            width: 50px;
          }
        }
        td:nth-child(4) {
          text-align: right;
        }
        td:nth-child(5) {
          text-align: center;
          button {
            padding: 5px 8px;
            border-radius: 3px;
            background: blue;
            color: #fff;
          }
        }
      }
      tfoot {
        td {
          text-align: center;
        }
      }
     
      &:hover {
        transform: scale(1.05); /* 호버 시 크기 확대 효과 추가 */
      }
}


}
`

const CartSection = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.products)
    const carts = useSelector(state=>state.products.carts)

    const tempProducts = carts.map(item=>{
        const product = products.find(product => product.id === item.id)
        return { product:product, qty:item.qty }
    })

    const total = tempProducts.reduce((acc, item)=>acc+(item.product.price * item.qty), 0)
    const allCount = tempProducts.reduce((acc, item)=>acc+(item.qty), 0)

    const onChange = (e, id, inventory) => {
        let newQty = parseInt(e.target.value)
        if (newQty<1) {
            newQty = 1
        }
        if (newQty>inventory) {
            newQty = inventory
        }
        dispatch(qtyUpdate({id:id, newQty:newQty}))
    }


    

    return (
       
        <TableBlock border="1">
             
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            
            { tempProducts.length ? 
                <tbody>
                    {
                        tempProducts.map((item, index)=>(
                            <tr key={index}>
                                <td>
                                    <img src={item.product.image} alt={item.product.title} />
                                </td>
                                <td>
                                    { item.product.title } ({item.product.price.toLocaleString()})
                                </td>
                                <td>
                                    <input type="number" value={item.qty} onChange={ (e)=>onChange(e, item.product.id, item.product.inventory) } />
                                </td>
                                <td>
                                    { (item.product.price * item.qty).toLocaleString() }
                                </td>
                                <td>
                                    <button type="button" onClick={ ()=>dispatch(removeCartItem(item.product.id)) }>삭제</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody> 
                : 
                <tbody>
                    <tr>
                        <td 
                        colSpan="5" 
                        style={{padding: '100px 0', textAlign: 'center', fontSize: '30px'}}>
                           비어있습니다.
                        </td>
                    </tr>
                </tbody> 
            }
            <tfoot>
                <tr>
                    <td colSpan="5">
                        합계 : { total.toLocaleString() } <br />
                        주문수량 : { tempProducts.length }종 {allCount}개
                    </td>
                </tr>
            </tfoot>
        </TableBlock>
    );
};

export default CartSection;