import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import MainBusiness from "./mainBusiness";
import MainFlood from "./mainFlood";
import Header from "./header";
import Navbar from "./navbar";
import Input from "./input";
import Login from "./login";

const App = () => {
  const [collegs, setCollegs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/collegs")
      .then((res) => setCollegs(res.data));
  }, []);


  const isLog = useSelector((s) => (s.authReducer))
  const { editMessage } = useSelector((s => s.messageReducer))

  if (isLog) {
    return (
      <BrowserRouter>
        <div className="flex">
          <Navbar collegs={collegs} />
          <div className="w-full flex flex-col">
            <Header />
            <Route
              exact
              path="/business"
              render={() => (
                <MainBusiness editMessage={editMessage} collegs={collegs} />
              )}
            />
            <Route
              exact
              path="/flood"
              render={() => (
                <MainFlood editMessage={editMessage} collegs={collegs} />
              )}
            />
            <Input editMessage={editMessage} />
          </div>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <Login />
    );
  }
};

export function loginAuth(obj) {
  return obj;
}

export default App;
