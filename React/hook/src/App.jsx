import React, { useEffect, useState } from 'react'

function App() {
    let [count, updateCount] = useState(5)

    let [names, updateNames]=useState('')
    let [getNames, updategetName]=useState('')
  
    function increase(){
      return  updateCount(count+1)
    }

    useEffect(()=>{
        console.log("hi hi"+count)
    },[count])
   
    return (
        <>
            <h1> {count}  </h1>
            <button onClick={()=>increase()}> + </button>
            <button onClick={()=> updateCount(count-1)}> - </button>
            <hr />
            <input type='text'  onChange={(e)=>updateNames(e.target.value)}/> 
            <button onClick={()=>updategetName(names)}>Click</button>
            <h1> My name is {names}</h1>
            <h2> (On click) My Name is {getNames}</h2>
        </>
    )
}

export default App


