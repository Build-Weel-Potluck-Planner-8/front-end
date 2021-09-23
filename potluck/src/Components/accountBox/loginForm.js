import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";
import axios from 'axios';


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const initialCredentials = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const signIn = (e) => {
    axios.post('/users', credentials)
      .then( res => {
        localStorage.setItem("token", res.data.token);
        props.history.push('/classes')
      })
      .catch(err=> {
        console.log(err);
      })
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </FormContainer>
      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit" onClick={signIn}>
        Signin
      </SubmitButton>
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
