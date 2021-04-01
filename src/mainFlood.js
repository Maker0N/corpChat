import React from "react";
import { useSelector } from "react-redux";
import Message from "./message";
import MessageCollegs from "./messageCollegs";

const MainFlood = (props) => {
  const { flood, collegsMessages } = useSelector((s) => s.messageReducer);
  const {
    editMessage: { index },
  } = useSelector((s) => s.messageReducer);
  const colorIndex = index;
  const randomIndex = Math.floor(
    Math.random() * (Math.floor(collegsMessages.length) - Math.ceil(0) + 1) + 0
  );

  return (
    <div>
      <div className="flex justify-center text-red-800 bg-blue-100">
        Флудилка!
      </div>
      <div className="w-3/5">
        {flood.map((it, index) => (
          <Message
            colorIndex={colorIndex}
            key={index}
            message={it}
            index={index}
            editMessage={props.editMessage}
          />
        ))}
      </div>
      <div className="absolute right-0 w-3/5">
        <MessageCollegs message={collegsMessages[randomIndex]} />
      </div>
    </div>
  );
};

export default MainFlood;
