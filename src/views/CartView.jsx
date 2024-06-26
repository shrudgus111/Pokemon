import React from 'react';
import styled from 'styled-components'
import Title from '@/components/layout/Title'
import CartSection from '@/components/cart/CartSection'

const CartViewBlock = styled.div`
    max-width:900px; margin:50px auto;
`
const CartView = () => {
    return (
        <CartViewBlock>
            <Title title="포켓몬 스토어" />
            <CartSection />
        </CartViewBlock>
    );
};

export default CartView;