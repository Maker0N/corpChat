import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { auth } from './redux/authReducer'

const Login = () => {

  const dispatch = useDispatch()
  const [inputLogPas, setInputLogPas] = useState({login: '', password: ''});

  return (
    <div>
      <div className="flex justify-center text-red-800 m-3">
        Корпоративный чат
      </div>
      <div className="flex justify-center">
        <input
          className="border pl-2"
          type="text"
          placeholder="логин"
          onChange={(e) =>
            setInputLogPas({ ...inputLogPas, login: e.target.value })
          }
        />
        <input
          className="border ml-2 pl-2"
          type="text"
          placeholder="пароль"
          onChange={(e) =>
            setInputLogPas({ ...inputLogPas, password: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center">
        <button className="border rounded m-2 px-2 bg-green-200" onClick={(e) => {
          e.preventDefault()
          auth(dispatch, inputLogPas)
        }}>Вход</button>
      </div>
    </div>
  );
};

export default Login;
