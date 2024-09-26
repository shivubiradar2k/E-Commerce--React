import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../commponets/Breadcrum/Breadcrum';
import ProductDisplay from '../commponets/ProductDisplay/ProductDisplay';
import DescriptionBox from '../commponets/DescriptionBox/DescriptionBox';
import RelatedProducts from '../commponets/RelatedProducts/RelatedProducts';

 const Product = (props) => {
  const {all_product}= useContext(ShopContext);
  
  const {productId}= useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}



export default Product