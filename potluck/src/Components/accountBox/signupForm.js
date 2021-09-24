import React, { useContext, useState } from "react";
import axios from 'axios'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const initialSignUpForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: ''
  }

  const [signUpInfo, setSignUpInfo] = useState(initialSignUpForm)

  const handleChange = e => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value
    })
  }

  const signUp = e => {
      // axios.post('/users/register', signUpInfo)
      //   .then( res => {
      //     localStorage.setItem("token", res.data.token);
      //     props.history.push('/classes')
      //   })
      //   .catch(err=> {
      //     console.log(err);
      //   })
      props.history.push('/organizer')
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input name='name' type="text" placeholder="Full Name" onChange={handleChange}/>
        <Input name='email' type="email" placeholder="Email" onChange={handleChange}/>
        <Input name='password' type="password" placeholder="Password" onChange={handleChange}/>
        <Input name='passwordConfirm' type="password" placeholder="Confirm Password" onChange={handleChange}/>
        <Input name='phone' type="number" name="phoneNumber" placeholder="Phone Number" onChange={handleChange}/>
      </FormContainer>

      <SubmitButton type="submit" onClick={signUp}>Signup</SubmitButton>
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}