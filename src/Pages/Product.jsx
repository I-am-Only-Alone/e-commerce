import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Component/Breadcrums/Breadcrums'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox'
import RelatedPruducts from '../Component/RelatedPruducts/RelatedPruducts'

const Product = () => {
  const {all_product} =useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div className='product'>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedPruducts/>
    </div>
  )
}

export default Product