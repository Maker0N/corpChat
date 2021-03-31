import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";
import { deleteMessage } from './redux/messageReducer'

const Message = (props) => {
  // console.log(props.index)
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  return (
    <div
    // className="w-auto h-1/2 bg-green-200 m-2 p-2 rounded"
    >
      <div className="flex w-auto h-1/2 justify-between bg-green-200 m-2 p-2 rounded">
        {props.message}
        <button className="absolut rigth-0"
        onClick={(e) => {
          e.preventDefault()
          dispatch(deleteMessage(props.index, pathname))
        }}>X</button>
      </div>
    </div>
  );
}

export default Message