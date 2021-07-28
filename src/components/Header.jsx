import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <NavBar>
        <Logo src="/images/logo.svg" />

        <NavMenu>
          <a>
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movies-icon.svg" alt="" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
          </a>
        </NavMenu>

        <Userimg src=" https://lh3.googleusercontent.com/ogw/ADea4I5zCNPD8oLfp14TZx_40L-wC3ns9QWiNpvVXUoF=s83-c-mo" />
      </NavBar>
    );
  }
}

export default Header;

const NavBar = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 50px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.43px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        position: absolute;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const Userimg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
