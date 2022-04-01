import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from "./componenets/homeForm";
import Pizza from "./componenets/pizzaForm";
import * as yup from 'yup';

// Validation
import pizzaValidation from "./validation/pizzaScheme";

// Toppings
import { toppings } from "./utils/toppings";

const initialPizzaForm = {
  clientname: "",
  specialtext: ""
}
const initialFormErrors = {
  clientname: ""
}

const App = () => {
  const [values, setValues] = useState(initialPizzaForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [checkedState, setChecked] = useState(
    new Array(toppings.length).fill(false)
  )

  const validate = (name, value) => {
    yup.reach(pizzaValidation, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ""}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const chng = (name, value) => {
    validate(name, value);
    setValues({ ...values, [name]: value })
  }

  const sbmt = () => {

  }

  const checkHandler = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);
    setChecked(updatedCheckedState);
  }


  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pizza">
        <Pizza 
          cmpnts={values}
          change={chng}
          submit={sbmt}
          errors={formErrors}
          onChecked={checkHandler}
          check={checkedState}
        />
      </Route>
    </div>
  );
};
export default App;
