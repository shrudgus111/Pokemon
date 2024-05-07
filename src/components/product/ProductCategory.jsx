import React from 'react';
import styled from 'styled-components'

const ProductCategoryBlock = styled.div`
    display: flex;
    justify-content: center;
    border-bottom:1px solid #000;
    
    li{
        list-style:none;
        width:33.33%;
    button {
        width:100%;
        font-size:25px;
       
        padding-bottom: 15px;
      
        background:#fff;

      
        
        &.on {
            background:#fff;
            color:#ffa70e;
            border-bottom:5px solid #ffa70e;
            font-weight:700;
        }
    }
        @media (max-width:768px) {
            display: flex;
            justify-content: center;
            border-bottom:1px solid #000;
            li{
                list-style:none;
                width:33.33%;
            button {
                width:300px;
                font-size:25px;
                margin:0 10px;
                padding-bottom: 15px;
              
                background:#fff;
                
                &.on {
                    background:#fff;
                    color:#ffa70e;
                    border-bottom:5px solid #ffa70e;
                    font-weight:700;
                }
            }
        }
        
      }
`

const ProductCategory = ({changeTitle, title}) => {
    const category = ['전체상품', '구축덱', '특별제품', ]
    return (
        <ProductCategoryBlock className='row'>
            {
                category.map((item, index)=>(
                    <li><button key={index} type="button" onClick={()=>changeTitle(item)} className={ title==item && "on" }>{item}</button></li>
                ))
            }
        </ProductCategoryBlock>
    );
};

export default ProductCategory;