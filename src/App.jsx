import './App.css';
import React, { useEffect } from 'react'
import { useState } from 'react';
import App2 from './Components/list/App'


function App() {

  const localData = localStorage.getItem('WorkList')
  const [data, setData] = useState('')
  const [text, setText] = useState('')
  const [info, setInfo] = useState(localData? JSON.parse(localData):[])
  

useEffect(()=>{
    localStorage.setItem('WorkList', JSON.stringify(info ))
 },[info])


  const Delete =()=>{
    localStorage.clear()
    setInfo([])
    setText('')
 }

  const Add = () =>{
    setInfo([...info, {id:info.length+1,name:data}])
    setData('')
    if(data===('')) {setText('Заполни строку')}
    else(setText(''))
}

 const OnDelList = (id) =>{
   setInfo([...info.filter((todo)=>todo.id !== id)])
 }

  return (
    <div className='todo'>
    <div className='container'>
    <div className='title'>Todo List</div>
         <h2>Количество задач:{info.length}</h2>
        <h2>{text}</h2>
        <input placeholder='Заполните строку...' value={data} type="text" onChange={(e)=>setData(e.target.value)} />
        <button onClick={Add}>Add</button>
        <button onClick={Delete}>Delete</button>
        <div className='list'>
       {
        info.map(value=>{
            return(
                <div className='list2' key={value.id}>
                  <h1>{value.id}.{value.name}</h1>
                   <button onClick={OnDelList}>Delete</button>
                </div>
            )
        })
       }
       </div>
    </div>
    <App2/>
  </div> 
  );
  
}

export default App;
