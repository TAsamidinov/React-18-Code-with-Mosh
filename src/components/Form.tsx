import React, { FormEvent } from "react";

const Form = () => {
  const [person, setPerson] = React.useState({
    name: "",
    age: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Submitted person:", person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => setPerson({ ...person, name: event.target.value })}
          value={person.name}
          id="name"
          type="text"
          className="form-control"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3 label form">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => setPerson({ ...person, age: event.target.value })}
        value={person.age}
          id="age"
          type="number"
          className="form-control"
          placeholder="Enter your age"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
