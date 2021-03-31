import React from 'react'
import { useSelector } from 'react-redux'
import Message from './message'

const MainBusiness = () => {
  const { business } = useSelector(s => s.messageReducer)
  return (
    <div>
      <div className="flex justify-center text-red-800">Корпоративный чат!</div>
      <div className="absolute right-0 w-3/5">
      {business.map((it, index) => (
        <Message key={index} message={it} index={index}/>
      ))}
      </div>
    </div>
  );
}

export default MainBusiness