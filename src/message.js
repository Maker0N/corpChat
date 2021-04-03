import React, {useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editMessage } from "./redux/messageReducer";
import { deleteMessage } from "./redux/messageReducer";

const Message = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [colleg, setColleg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/colleg")
      .then((res) => setColleg(res.data));
  }, []);

  return (
    <div className="w-full pb-12">
      <div
        className={
          props.index !== props.colorIndex
            ? "flex w-3/5 h-1/2 justify-between bg-green-200 m-2 p-2 rounded"
            : "flex w-3/5 h-1/2 justify-between bg-red-200 m-2 p-2 rounded"
        }
      >
        {props.messages.message}
        <div className="absolut rigth-0">
          <button
            className="absolut rigth-0 mr-1 px-1 border border-red-500 rounded"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                editMessage(props.messages.message, props.index, pathname)
              );
            }}
          >
            edit
          </button>
          <button
            className="absolut rigth-0"
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteMessage(props.index, pathname));
            }}
          >
            X
          </button>
        </div>
      </div>
      <div className="flex w-3/5 h-1/2 justify-between bg-blue-200 m-2 p-2 rounded absolute right-0">
        <div className="w-full absolut rigth-0">{props.messages.collegs}</div>
        <div className="absolut rigth-0 w-40">{colleg}</div>
      </div>
    </div>
  );
};

export default Message;
