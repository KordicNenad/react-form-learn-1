import React, { useState } from "react";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const changeName = (event) => {
    setEnteredName(event.target.value);
  };
  const changeAge = (event) => {
    setEnteredAge(event.target.value);
  };
  const changeNumber = (event) => {
    setEnteredNumber(event.target.value);
  };

  const submited = (event) => {
    event.preventDefault();

    const data = {
      name: enteredName,
      age: enteredAge,
      number: enteredNumber,
    };
    props.onData(data);

  };

  return (
    <form onSubmit={submited}>
      <div>
        <label>Name </label>
        <input type="text" value={enteredName} onChange={changeName}></input>
      </div>
      <div>
        <label>Age </label>
        <input type="date" value={enteredAge} onChange={changeAge}></input>
      </div>
      <div>
        <label>Number </label>
        <input type="int" value={enteredNumber} onChange={changeNumber}></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
