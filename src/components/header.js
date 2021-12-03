import React from "react"
// import Link from "gatsby"
import styled from "styled-components"
// import parse from "html-react-parser"

import bg from "../assets/ada-hero.jpg"

const Header = ({ title, isHomePage }) => {
  return (
    <HeaderContainer>
      {isHomePage ? (
        <div className="header-homepage">
          <div className="header-info">
            <h1>
              <span>Aotearoa</span>
              <span>Digital</span>
              <span>Arts</span>
              <span>Network—</span>
            </h1>
            <a href="#content-home" className="header-subtext">
              a web of sites
            </a>
          </div>
          <img className="header-bg" src={bg} alt="ada reader cover art" />
        </div>
      ) : (
        <span></span>
      )}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  color: white;
  background: black;

  .header-homepage {
    /* max-width: 1080px; */
    /* margin: 0 auto; */
    padding: 2rem 1rem;
    min-height: 100vh;
    overflow: hidden;
    padding: 30px;

    .header-info {
      height: 86vh;
      position: relative;
      z-index: 6;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      /* align-items:; */
    }

    .header-subtext {
      font-size: 2rem;
      display: inline-block;
      background: black;
      padding: 0.4rem 1.6rem;
      text-align: center;
      color: #e5f950;
      border: 1px solid #e5f950;
      box-shadow: 6px 6px 0 #e5f950;
      border-radius: 2rem;

      @media screen and (min-width: 940px) {
        font-size: 2rem;
        text-align: right;
        margin-left: auto;
        transition: color 400ms, background 400ms;

        &:hover {
          color: black;
          background-color: #08fe2e;
        }
      }
    }

    .header-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      object-fit: cover;
    }

    @media screen and (min-width: 940px) {
      min-height: calc(100vh - 38px);
    }

    h1 {
      /* text-shadow: 2px 2px 10px #e5f950; */
      text-shadow: 2px 2px 10px #000000, 6px 6px 10px #000;
      pointer-events: none;
      color: white;
      font-size: 3.6rem;
      letter-spacing: 1px;
      @media screen and (min-width: 940px) {
        font-size: 10vw;
        line-height: 1;
      }

      span {
        display: block;
      }
    }
  }
`

export default Header
