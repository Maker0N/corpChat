import React from "react";
import { useSelector } from "react-redux";
import Message from "./message";

const MainBusiness = (props) => {
  const { business } = useSelector((s) => s.messageReducer);
  const {
    editMessage: { index },
  } = useSelector((s) => s.messageReducer);
  const colorIndex = index;

  return (
    <div className="w-full h-full">
      <div className="flex justify-center text-red-800 bg-red-100">
        Деловой чат!
      </div>
      {business.map((it, index) => (
        <Message
          colorIndex={colorIndex}
          key={index}
          messages={it}
          index={index}
          editMessage={props.editMessage}
        />
      ))}
    </div>
  );
};

export default MainBusiness;
