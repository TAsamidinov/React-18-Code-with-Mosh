import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
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
