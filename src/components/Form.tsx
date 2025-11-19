import React, { FormEvent } from "react";

const Form = () => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const ageRef = React.useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log("Submitted person:", person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          ref={nameRef}
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
          ref={ageRef}
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
