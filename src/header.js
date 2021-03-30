import React from "react";

const Header = () => {
  return (
    <div className="bg-green-300 h-48">
      <div className="flex justify-center">Корпоративный чат</div>
      <div className="flex justify-center">
        <button className="border rounded h-8 w-56 m-2 px-2 bg-green-400">
          Деловой чат
        </button>
        <button className="border rounded h-8 w-56 m-2 px-2 bg-green-400">
          Корпоративная флудилка
        </button>
      </div>
    </div>
  );
};

export default Header;
