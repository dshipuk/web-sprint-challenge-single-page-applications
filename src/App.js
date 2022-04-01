import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from "./componenets/homeForm";



const App = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
