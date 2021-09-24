import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: center;
`;

const LoginButtonStyle = styled.a`
  text-decoration: none;
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #ff4500;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #ff4500;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function LoginButton(props) {
  return (
    <AccessibilityContainer>
      <LoginButtonStyle href='/signin'>Login</LoginButtonStyle>
    </AccessibilityContainer>
  );
}