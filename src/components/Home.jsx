import React, { Component } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <ImgSlider />
      </Container>
    );
  }
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
`;
