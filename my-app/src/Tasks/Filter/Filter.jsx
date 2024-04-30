import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Filter.css"
function Filter() {
    const [Search, setSearch] = useState("")
    const [Category, setCategory] = useState([])
 useEffect(() => {
   
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>setCategory(data))
 }, [])
 
  return (
    <>
    <div className='Filter'>
    <input className='inp_Search' type="text" value={Search}  onChange={(e)=>setSearch(e.target.value)} placeholder='Search'/>
    {Category
    .filter((x)=>x.title.toLowerCase().includes(Search.toLowerCase()))
    .map((x)=>(
    <div className='Filter_div' key={x.id}>
    <h1 className='Filter_title'>{x.title}</h1>
    <h4 className='Filter_description'>{x.description}</h4>
    <p className='Filter_price'>{x.price}$</p>
    </div>)
 )}
    </div>
    
 </>
  )
}

export default Filter