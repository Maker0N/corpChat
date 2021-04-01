import React from "react";
import { useSelector } from "react-redux";
import Message from "./message";
import MessageCollegs from "./messageCollegs";

const MainBusiness = (props) => {
  const { business, collegsMessages } = useSelector((s) => s.messageReducer);
  const {
    editMessage: { index },
  } = useSelector((s) => s.messageReducer);
  const colorIndex = index;
  const randomIndex = Math.floor(
    Math.random() * (Math.floor(collegsMessages.length) - Math.ceil(0) + 1) + 0
  );

  return (
    <div>
      <div className="flex justify-center text-red-800 bg-red-100">
        Деловой чат!
      </div>
      <div className="w-3/5">
        {business.map((it, index) => (
          <Message
            colorIndex={colorIndex}
            key={index}
            message={it}
            index={index}
            editMessage={props.editMessage}
          />
        ))}
        <div className="absolute right-0 w-3/5">
          <MessageCollegs message={collegsMessages[randomIndex]} />
        </div>
      </div>
    </div>
  );
};

export default MainBusiness;
