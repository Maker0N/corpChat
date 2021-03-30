import React from "react";

const Input = () => {
  return (
    <div className="fixed bottom-0 p-2 w-full">
      <button type="button" className="rounded-l border border-gray-400 px-1">
        Send
      </button>
      <input
        className="w-9/12 border-t border-b border-gray-400 px-1"
        type="text"
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
