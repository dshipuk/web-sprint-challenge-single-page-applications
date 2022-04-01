import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from "./componenets/homeForm";
import Pizza from "./componenets/pizzaForm";
import * as yup from 'yup';
import axios from "axios";

// Validation
import pizzaValidation from "./validation/pizzaScheme";

// Toppings
import { toppings } from "./utils/toppings";

const initialPizzaForm = {
  name: "",
  size: "",
  special: ""
}
const initialFormErrors = {
  name: ""
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
    let data = Object.assign({}, values)
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i] === true){
        data[toppings[i].name] = checkedState[i]
      }
    }
    axios.post("https://reqres.in/api/orders", data)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.error(err))
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
