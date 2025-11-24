import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object ({
    name: z.string().min(3, "The name must be 3 length min."),
    age: z.number({invalid_type_error: 'Age field is required.'}).min(18, "The age must be 18 or above.").max(99, "The age must be below 99.")
});

type FormData = z.infer<typeof schema>


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3 label form">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
