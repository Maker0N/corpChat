
import React from 'react'

const Navbar = (props) => {

  return (
    <div className="h-screen w-1/6 bg-purple-900 text-purple-200 p-1">
      <div className="mb-4">Коллеги онлайн</div>
      <div>
        {props.collegs.map((it, index) => (
          <div key={index}>{it.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Navbar