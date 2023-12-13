import React, { useState } from 'react'

const Product = ({data}) => {
const[number,setNumber]=useState(0);
const incHandler=()=>{
  setNumber(number+1)
}
const decHandler=()=>{
  if(number>0){
    setNumber(number-1)
  }
}
const totalPrice=number*data.price;
  return (
    <div className='productBox'>
      <div className='productContent'>
        <h4>{data.name}</h4>
        <h4>{data.price}$</h4>
      </div>
      <div className='priceContent'>
      <button type='button' onClick={incHandler} className='priceBtn'>+</button>
        <span className='productCount'>{number}</span>
        <button type='button' onClick={decHandler} className='priceBtn'>-</button>
        <span className='productCount'>{totalPrice}</span>
      </div>
    </div>
  )
}

export default Product