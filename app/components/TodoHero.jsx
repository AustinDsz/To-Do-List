import React from 'react'

const TodoHero = ({task}) => {
  const task_completed = task.filter(
    (tasks)=>{tasks.completed==true}
  ).length;

  const total = task.length;
  return (
    <div>
        <p>Tasks done</p>
        <p>{task_completed}/{total}</p>
    </div>

  )
}

export default TodoHero