import React, {useState} from 'react';

import Title from '@/components/layout/Title'
import ProductCategory from '@/components/product/ProductCategory'
import ProductSection from '@/components/product/ProductSection'

const ProductView = () => {

    const [title, setTitle] = useState("전체상품")
   

    const changeTitle = (value)=>{
        setTitle(value)
       
    }

  
    return (
        <div>
            <Title title="제품정보" />
            <ProductCategory changeTitle={changeTitle} title={title} className="row" />
            <ProductSection title ={title} className="row" />
        </div>
    );
};

export default ProductView;