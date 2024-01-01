"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>
  
  {
    e.preventDefault()
    setmainTask([...mainTask, { title , desc }])
    //console.log(mainTask)
    settitle("")
    setdesc("")
  }
  const deleteHandler=(i)=>
  {
    let copy=[...mainTask]
    copy.splice(i,1)
    setmainTask(copy)
  }
  const completeHandler=(i)=>
  {
    let copy=[...mainTask]
    copy[i].desc="Completed"
    setmainTask(copy)
  }
  let render=<h2>No task available</h2>

  if(mainTask.length>0)
  {
    render=mainTask.map((t,i)=>
  {
      return (
        
        <li key={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between mb-5 px-5 w-2/3'>
          <h4 className='text-2xl font-semibold'>{t.title}</h4>
          <h5 className='text-xl font-semibold'>{t.desc}</h5>
        </div>
        <button onClick={()=>
          {
            completeHandler(i)
          }
          } 
          className=" text-white text-xl mb-3 p-2 rounded bg-red-500">
          Complete
        </button>
        <button onClick={()=>
          {
            deleteHandler(i)
          }
          } 
          className=" text-white text-xl mb-3 p-2 rounded bg-red-500">
          Delete
        </button>
        </li>
      )
  })
  }
  return (
    <>
    <h1 className=' p-5 bg-black text-white font-bold text-3xl text-center'>My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input 
        type="text"  
        placeholder='Enter title' 
        className='m-5 p-2 mx-10 border-black rounded text-2xl border-solid border-2'
        value={title} 
        onChange={(e)=>
        {
          settitle(e.target.value)
        }}
      />
      <input 
        type="text" 
        placeholder='Enter Description' 
        value={desc} 
        onChange={(e)=>
          {
            setdesc(e.target.value)
          }}
        className='m-5 p-2 mx-10 border-black rounded text-2xl border-solid border-2' 
      />
      <button 
       
        className="bg-black text-white text-2xl m-5 p-2 rounded">
          Add Task
      </button>
    </form>
    <hr></hr>

    <div className='p-3 bg-slate-200 m-5 rounded'>
          <ul>
          {render}
          </ul>
    </div>
    </>
  )
}

export default page