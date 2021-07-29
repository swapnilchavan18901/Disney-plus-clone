import React, { Component } from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>

      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupButton>
      </Controls>
      <SubTitle>ajaakjsssaisjaskalsmalsalajdkadkanalmslamdlamdladla</SubTitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        adipisci explicabo suscipit alias, odit labore dicta perferendis
        laboriosam est ad inventore sint libero quasi excepturi tenetur sit quos
        deleniti assumenda neque laudantium ut quaerat minus ipsam quis! Quis,
        iusto explicabo?
      </Description>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vh;
  min-width: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 3px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 18px;
    color: white;
  }
`;
const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
`;
const Description = styled.div``;
