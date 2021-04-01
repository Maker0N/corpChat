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
  const { editMessage} = useSelector((s => s.messageReducer))

  if (isLog) {
    return (
      <BrowserRouter>
        <div className="flex">
          <Navbar />
          <div className="w-full flex flex-col">
            <Header />
            <Route
              exact
              path="/business"
              render={() => (
                <MainBusiness
                  editMessage={editMessage}
                />
              )}
            />
            <Route
              exact
              path="/flood"
              render={() => <MainFlood editMessage={editMessage} />}
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
