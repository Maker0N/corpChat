import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MainBusiness from "./mainBusiness";
import MainFlood from "./mainFlood";
import Header from "./header";
import Navbar from "./navbar";
import Input from "./input";
import Login from "./login";

const App = () => {
  const isLog = useSelector((s) => (s.authReducer))

  if (isLog) {
    return (
      <BrowserRouter>
        <div className="flex">
          <Navbar />
          <div className="w-full flex flex-col">
            <Header />
            <Route exact path="/business" component={() => <MainBusiness />} />
            <Route exact path="/flood" component={() => <MainFlood />} />
            <Input />
          </div>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      // <BrowserRouter>
      <Login />
      // </BrowserRouter>
    );
  }
};

export function loginAuth(obj) {
  return obj;
}

export default App;
