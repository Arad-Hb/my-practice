import React, { useState } from 'react'

const Form = () => {
    const[formData,setFormData]=useState({name:"",price:0})


    const submitHandler=(element)=>{
        element.preventDefault();
        console.log(formData);  
    }
    
    const newNameHandler=(e)=>{
        setFormData({...formData,name:e.target.value});
    }
    
    const newPriceHandler=(e)=>{
        setFormData({...formData,price:e.target.value});
    }
    
  return (
    <div className='productBox'>
        <form onSubmit={submitHandler}  className='formBox'>
            <input type='text' placeholder='enter product name' onChange={newNameHandler}  className='formInput'/>
            <input type='number' placeholder='enter product price' onChange={newPriceHandler}  className='formInput'/>
            <button className='formBtn'>add</button>
        </form>
    </div>
  )
}

export default Form