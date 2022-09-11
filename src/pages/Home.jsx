import React from "react";
import styled from "styled-components";
import FormInput from "../components/FormInput";

const Home = () => {
  return (
    <Form>
      <FormInput />
    </Form>
  );
};

export default Home;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
