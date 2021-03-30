import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./main";
import Header from "./header";
import Navbar from "./navbar";
import Input from './input'
import Login from "./login";

const App = () => {

  const auth = 1;

    if (auth !== 1) {
      return (
      <BrowserRouter>
          <div className="flex">
            <Navbar />
            <div className="w-full flex flex-col">
              <Header />
              <Switch>
                <Route exact path="/main" render={() => <Main />} />
              </Switch>
              <Input />
            </div>
          </div>
        </BrowserRouter>
      )} else {
      return (
        <Login />
      );
    };
};

export function loginAuth(obj) {
  return obj;
};

export default App;
