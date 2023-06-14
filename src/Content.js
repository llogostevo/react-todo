import { useState } from 'react';

import React from 'react'
import { Groceries } from './Groceries';

export const Content = () => {
    const [name, setName] = useState("Lloyd")
    const [count, setCount] = useState(0)
    
    const handleNameChange = () => {
        const people = ["Bob", "Tony", "Sarah", "Jenny", "Lloyd"]
        const int = Math.floor(Math.random()*3)
        setName(people[int]);
    }

    const handleClick = () =>{
        setCount(count+1)
        console.log(count)
    }

  return (
    <main>
        <h1>{name}</h1>    
        <div className="button" onClick={handleNameChange}>➕</div>
        <div className="button" onClick={handleClick}>➕</div>

        <Groceries />
    </main>
  )
}

export default Content;
