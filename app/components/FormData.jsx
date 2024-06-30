'use client'

import React, { useState } from 'react'

const FormData = ({ setTask }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    setTask((prevtask) => [
      ...prevtask,
      {
        title: todo,
        id: self.crypto.randomUUID(),
        completed: false
      }])
    e.preventDefault();
    setTodo("")

  }
  return (
    <>
      <div className='flex justify-center items-center flex-col px-3 py-3'>
        <form className="" onSubmit={handleSubmit}>

          <input
            type='text'
            name='todo'
            id='todo'
            className='px-3 py-3 border-0 rounded-md ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-300'
            placeholder='Write a task'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' className='ml-2 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            ADD
          </button>
        </form>
      </div>
    </>
  )
}



export default FormData