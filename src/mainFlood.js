import React from 'react'
import { useSelector } from "react-redux";
import Message from './message'

const MainFlood = () => {
  const { flood } = useSelector((s) => s.messageReducer);
  return (
    <div>
      <div className="flex justify-center text-red-800">Флудилка!</div>
      <div className="w-3/5">
        {flood.map((it, index) => (
          <Message key={index} message={it} index={index} />
        ))}
      </div>
    </div>
  );}

export default MainFlood