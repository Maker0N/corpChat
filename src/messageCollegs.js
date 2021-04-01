import React from 'react'

const MessageCollegs = (props) => {

  return (
    <div className="flex w-auto h-1/2 justify-between bg-blue-200 m-2 p-2 rounded">
      <div className="absolut rigth-0">
        <div>{props.message}</div>
      </div>
    </div>
  );}

export default MessageCollegs