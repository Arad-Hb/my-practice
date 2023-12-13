import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import Form from './components/Form'
function App() {
  const products=[
    {name:"Samsung",price:12000,id:1},
    {name:"Apple",price:20000,id:2},
    {name:"Motorola",price:10000,id:3},
    {name:"Xiaomi",price:8000,id:4},
  ]

  return (
    <div>
      <div className='productsBox'>
        <Form/>
        {products.map((item)=>{
          return(<Product key={item.id} data={item}/>)
          })
        }
      </div>
    </div>
   
  )
}

export default App
