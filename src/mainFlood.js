import React from "react";
import { useSelector } from "react-redux";
import Message from "./message";

const MainFlood = (props) => {
  const { flood } = useSelector((s) => s.messageReducer);
  const {
    editMessage: { index },
  } = useSelector((s) => s.messageReducer);
  const colorIndex = index;

  return (
    <div>
      <div className="flex justify-center text-red-800 bg-blue-100">
        Флудилка!
      </div>
      {flood.map((it, index) => {
        return <Message
          colorIndex={colorIndex}
          key={index}
          messages={it}
          index={index}
          editMessage={props.editMessage}
        />
      })}
    </div>
  );
};

export default MainFlood;
