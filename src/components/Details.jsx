import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    //Grab the movie Infos from DB=
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // Save the movie Data
          setMovie(doc.data());
        } else {
          // if movie doesnt exist redirect to home page
        }
      });
  }, []);

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} />
      </Background>

      <ImageTitle>
        <img src={movie.titleImg} />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <SubTitle>{movie.subTitle}</SubTitle>
      <Description>{movie.description}</Description>
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
    border: 0px;
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
  margin-top: 26px;
  min-height: 20px;
`;
const Description = styled.div`
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.4;
  color: rgb(249, 249, 249);
  max-width: 760px;
  margin-top: 40px;
`;
