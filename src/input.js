import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { sendMessage } from "./redux/messageReducer";
import { sendEditMessage } from "./redux/messageReducer";

const Input = (props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [editMessageState, setEditMessageState] = useState(
    props.editMessage.message
  );
  const { pathname } = useLocation();
  const clearMessage = (e) => {
    e.preventDefault();
      setMessage("");
      setEditMessageState("");
  };

  return (
    <div className="fixed bottom-0 p-2 w-full">
      <button
        type="button"
        className="rounded-l border border-gray-400 px-1"
        onClick={(e) => {
          e.preventDefault();
          props.editMessage.message
            ? editMessageState &&
              dispatch(
                sendEditMessage(
                  editMessageState,
                  props.editMessage.index,
                  pathname
                )
              )
            : message && dispatch(sendMessage(message, pathname));
          clearMessage(e);
        }}
      >
        Send
      </button>
      <input
        className="w-9/12 border-t border-b border-gray-400 px-1"
        type="text"
        value={props.editMessage.message ? editMessageState : message}
        onChange={(e) =>
          props.editMessage.message
            ? setEditMessageState(e.target.value)
            : setMessage(e.target.value)
        }
      />
      <button
        type="button"
        className="bg-white rounded-r border-t border-b border-r border-gray-400 text-gray-400 px-1"
        onClick={(e) => {
          clearMessage(e);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Input;
