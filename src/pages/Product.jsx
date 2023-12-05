import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import all_product from '../components/Assests/all_product';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId)) 
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
