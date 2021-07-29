import React, { Component } from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          molestias deserunt eos sint adipisci vel laboriosam excepturi!
          Officiis, aliquam harum?
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    position: absolute;
    background-repeat: no repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  display: flex;
  margin-top: 100px;
  align-item: center;
  flex-direction: column;
  width: 80%;
  padding: 80px, 40px;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  padding: 17px;
  width: 100%;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #f9f9f9;
  background-color: #0063e5;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
color:
letter-spacing:1.5px
font-size:11px;
text-align:center;
line-height:1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
