import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AutoConter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevcount) => prevcount +1 )
        },1000)

        return () => clearInterval(interval)
    }, [])
  return (
    <div>
        <p>Contador automático: {count}</p>
    </div>
  )
}

export default AutoConter