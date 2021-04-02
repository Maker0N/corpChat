import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-green-300 h-36">
      <div className="flex justify-center">Корпоративный чат</div>
      <div className="flex justify-center">
        <button
          className="border rounded h-8 w-56 m-2 px-2 bg-green-400"
        >
          <Link to="/business">
          Деловой чат!
          </Link>
        </button>
        <button
          className="border rounded h-8 w-56 m-2 px-2 bg-green-400"
        >
          <Link to="/flood">
          Флудилка!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
