import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [collegs, setCollegs] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/collegs').then(res => setCollegs(res.data))
  }, [])

  return (
    <div className="h-screen w-1/6 bg-purple-900 text-purple-200 p-1">
      <div className="mb-4">Коллеги онлайн</div>
      <div>
        {collegs.map((it, index) => (
          <div key={index}>{it.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Navbar