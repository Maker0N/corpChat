import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editMessage } from "./redux/messageReducer";
import { deleteMessage } from "./redux/messageReducer";

const Message = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div>
      <div
        className={
          props.index !== props.colorIndex
            ? "flex w-auto h-1/2 justify-between bg-green-200 m-2 p-2 rounded"
            : "flex w-auto h-1/2 justify-between bg-red-200 m-2 p-2 rounded"
        }
      >
        {props.message}
        <div className="absolut rigth-0">
          <button
            className="absolut rigth-0 mr-1 px-1 border border-red-500 rounded"
            onClick={(e) => {
              e.preventDefault();
              dispatch(editMessage(props.message, props.index, pathname));
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
    </div>
  );
};

export default Message;
