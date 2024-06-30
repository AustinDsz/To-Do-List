"use client"
import { useState } from 'react';
import Cardlist from './components/Cardlist';
import FormData from './components/FormData';
import Header from './components/Header.jsx'
import TodoHero from './components/TodoHero';

export default function Home() {
  const [task, setTask] = useState([]);
  
  return (
    <>
    <Header/>
    <TodoHero task={task}/>
    <FormData setTask={setTask}/>
    <Cardlist task={task} setTask={setTask}/>
    </>
  );
}
