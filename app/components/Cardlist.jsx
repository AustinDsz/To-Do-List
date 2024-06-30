'use client'
import React from 'react'
import Items from './Items'


const Cardlist = ({task, setTask}) => {
  return (
    <>
      <ol className='flex items-center flex-col gap-7 mt-2 '>
      {task && task.length > 0 ? (
        task?.map((item, index) => <Items key={index} item={item} setTask={setTask} />)
      ) : (
        <p>hey boss, how you doin?</p>
      )}
      </ol>
    </>
  )
}

export default Cardlist