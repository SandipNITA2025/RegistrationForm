import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const FormInput = () => {
  const initialValues = {
    userName: "",
    emailAddress: "",
    date: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log(formErrors);
      alert("Form Submitted");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "First name is required!";
    }
    if (!values.emailAddress) {
      errors.emailAddress = "Email is required!";
    } else if (!regex.test(values.emailAddress)) {
      errors.emailAddress = "This is not valid email!";
    }
    if (!values.date) {
      errors.date = "Date is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "Password length should be minimum 6 char";
    }
    if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password did not match!";
    }
    return errors;
  };

  const handleClear = (e) => {
    setFormValues((e.target.value = ""));
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <label>
        <input
          type="text"
          name="userName"
          value={formValues.userName}
          onChange={handleChange}
          placeholder="Your first name"
        />
      </label>
      <p>{formErrors.userName}</p>

      <label>
        <input
          type="email"
          name="emailAddress"
          value={formValues.emailAddress}
          onChange={handleChange}
          placeholder="Your Email"
        />
      </label>
      <p>{formErrors.emailAddress}</p>
      <label>
        <input
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          placeholder="Your Birthday"
        />
      </label>
      <p>{formErrors.date}</p>
      <label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </label>
      <p>{formErrors.password}</p>
      <label>
        <input
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </label>
      <p>{formErrors.confirmPassword}</p>
      <label className="btn">
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleClear}>
          Reset
        </button>
      </label>
    </FormWrapper>
  );
};

export default FormInput;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 550px;
  background-color: #7ed6df;
  @media screen and (max-width: 650px){
    width: 350px;
  height: 500px;
  }
  h2 {
    text-align: center;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: tomato;
  }
  label {
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      padding: 1rem;
      width: 70%;
    }
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      padding: .6rem 1rem;
      cursor: pointer;
      background-color: #f39c12;
      color: #ffffff;
    }
  }
`;
