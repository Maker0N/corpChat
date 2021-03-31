import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { sendMessage } from "./redux/messageReducer";
// import { sendMessageFlood } from "./redux/messageReducer";

const Input = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 p-2 w-full">
      <button
        type="button"
        className="rounded-l border border-gray-400 px-1"
        onClick={(e) => {
          e.preventDefault();
            dispatch(sendMessage(message, pathname))
        }}
      >
        Send
      </button>
      <input
        className="w-9/12 border-t border-b border-gray-400 px-1"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="button"
        className="bg-white rounded-r border-t border-b border-r border-gray-400 text-gray-400 px-1"
      >
        X
      </button>
    </div>
  );
};

export default Input;
