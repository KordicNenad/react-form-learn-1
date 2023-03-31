import React, { useState } from 'react';
import Form from "./components/form"

const App = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    number: ""
})

  const formData = (data) => {
    setData(data)
  }


  return (
    <div>
      <h2>Welcome</h2>
      <Form onData={formData}/>
      <h1>Name: {data.name}</h1>
      <p>Age: {data.age}</p>
      <p>Number: {data.number}</p>
    </div>
  );
}

export default App;
