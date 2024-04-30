import React from 'react'
import { useState } from 'react'
import { useEffect  } from 'react'
function Localstoarage() {
    const [Inp, setInp] = useState("")
    const [Todos, setTodos] = useState([localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")): []])
    function Handleinput(e) {
       
        e.preventDefault()
        setTodos((oldArray)=>[...oldArray,{name:Inp}])
        setInp("")
    }
    useEffect(() => {
   localStorage.setItem("todo",JSON.stringify(Todos))
    }, [Todos])
    
  return (
    <>
      <div>
  <h1>Todo</h1>
    <form  onSubmit={Handleinput} >
        <input type="text" onChange={(e)=>setInp(e.target.value) } value={Inp} />
        <button >add</button>
    </form>
      <ol>
        {Todos.map((x,i)=>(<>
          <div className='container_h1' key={i}>
            <h1>{x.name}</h1>
          </div>
            </>
     
    ))}
      </ol>
    </div>
    </>
  )
}

export default Localstoarage