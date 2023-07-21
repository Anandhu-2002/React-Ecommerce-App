import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import { Link, useParams } from 'react-router-dom'
import { getProductId } from '../../apiService/Api'



function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState({})


  useEffect(() => {

    const fetchProductDetails = async () => {
      const data = await getProductId(id)

      setProduct(data)


    }
    fetchProductDetails()

  }, [id])

  const handleBuyNow=()=>{
    window.confirm("The feature will be live soon")
  }


  return (
    <div className="product-details-container">



      <img src={product.image} alt="" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>${product.price}</p>
        <button className='btn-buy-now' onClick={handleBuyNow}>Buy Now</button>
        <Link to='/'><button className='btn-go-back'>Go Back</button></Link>

      </div>




    </div>
  )
}

export default ProductDetails