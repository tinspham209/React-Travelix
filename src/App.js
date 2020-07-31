import React, { Suspense } from "react";
import Header from "./component/Header/header";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./component/NotFound";
import "./App.css";
import Home from "./containers/Home/index";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />

            <Route path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
