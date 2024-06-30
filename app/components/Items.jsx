import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState, useRef } from 'react';

const Items = ({ item, setTask }) => {
  const [edit, setedit] = useState(false);
  const inputEleRef = useRef(null);

  useEffect(() => {
    if (edit && inputEleRef.current) {
      inputEleRef.current.focus()
    }
  }, [edit]);

  const handleInputChange = (e) => {
    setTask((prevTasks) =>
      prevTasks.map((todo) =>
        todo.id === item.id
          ? { ...todo, title: e.target.value }
          : todo
      )
    );
  }

  const handleInputBlur = () => {
    setedit(false);
  };

  const handleInpSubmit = (event) => {
    event.preventDefault();
    setedit(false)
  }

  const deleteTask = () => {
    setTask((prevTasks) =>
      prevTasks.filter((todo) =>
        todo.id !== item.id
      )
    );
  }

  const completeTodo = () => {
    setTask((prevTasks) =>
      prevTasks.map((todo) =>
        todo.id === item.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
    console.log(item)
  };
  return (
    <>
    <li>
      <div className='border-2 border-amber-200 rounded-md overflow-hidden break-all w-96 h-24 flex items-center'>
          {edit ? (
            <form onSubmit={handleInpSubmit} className='w-full'>
              <input ref={inputEleRef} defaultValue={item?.title} onBlur={handleInputBlur} onChange={handleInputChange} className="border-0 w-full h-24 p-6" />
            </form>
          ) : (
            <div className='flex justify-between items-center w-full'>
              <button onClick={completeTodo} className='ml-2'>
                <Image src={item.completed ? "/badge-check.svg" : "/badge.svg"} alt="alt" width={35} height={35} />
              </button>
              <p style={item.completed ? { textDecoration: "line-through" } : {}} className='p-2 gap-2 text-xl text-white'>
                {item?.title}
              </p>
              <div className='flex'>
                <button className='p-2' onClick={() => setedit(true)}>
                  <Image src="/pencil.svg" alt="alt" width={35} height={35} />
                </button>
                <button className='p-2'>
                  <Image src="/circle-x.svg" alt="alt" width={35} height={35} onClick={deleteTask} />
                </button>
              </div>
            </div>
          )}
      </div>
      </li>

    </>
  )
}

export default Items