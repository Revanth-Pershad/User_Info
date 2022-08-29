import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./Add_User.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const Add_User = (props) => {
  const [EnteredUsername, setEnteredUsername] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (EnteredUsername.trim().length == 0 || EnteredAge.trim().length == 0) {
      setError({
        title : 'Invalid Values',
        message : 'Enter non-empty values'
      })
      return;
    }
    if (+EnteredAge < 1 || +EnteredAge > 99) {
      setError({
        title : 'Invalid Age',
        message : 'Enter a valid age (>0 || <99)'
      })
      return;
    }
    console.log(EnteredUsername, EnteredAge);
    props.addUser(EnteredUsername, EnteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
    setEnteredAge("");
    setEnteredUsername("");
  }

  const updateUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const updateAge = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={EnteredUsername}
            onChange={updateUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={EnteredAge}
            onChange={updateAge}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Add_User;
