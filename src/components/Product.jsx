import React from 'react'

const Product = ({data}) => {
  return (
    <div className='productBox'>
        <h4>{data.name}</h4>
        <h4>{data.price}</h4>
    </div>
  )
}

export default Product