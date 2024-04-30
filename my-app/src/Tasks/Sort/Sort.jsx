import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Sort.css"
function Sort() {
    const [Category, setCategory] = useState([])
    useEffect(() => {
   
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setCategory(data))
     }, [])
     function Inc(parm) {
        
        setCategory([...Category].sort((a,b) => (a[parm] > b[parm]) ? 1 : ((b[parm] > a[parm]) ? -1 : 0)))
     }
     function Dec(parm) {
        setCategory([...Category].sort((a,b) => (a[parm] < b[parm]) ? 1 : ((b[parm] < a[parm]) ? -1 : 0)))
     }
  return (
   <>
   <div className='Sort_button'>
     <button onClick={()=>Inc("title")}>A-z</button>
     <button onClick={()=>Dec("title")}>z-a</button>
     <button onClick={()=>Inc("price")}>increase price</button>
     <button onClick={()=>Dec("price")}> decreace price</button>
   </div>
     <div className='Sort'>
    {Category
    .map((x)=>(
    <div className='Sort_div' key={x.id}>
    <h1 className='Sort_title'>{x.title}</h1>
    <h4 className='Sort_description'>{x.description}</h4>
    <p className='Sort_price'>{x.price}$</p>
    </div>)
 )}
    </div>
   </>
  )
}

export default Sort