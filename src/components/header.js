import React from "react"
import styled from "styled-components"

// import bg from "../assets/ada-hero.jpg"
import bg from "../assets/ada-net-cluster-horizontal.gif"

const Header = ({ title, isHomePage }) => {
  return (
    <HeaderContainer>
      {isHomePage ? (
        <div className="header-homepage">
          <div className="header-info">
            <div className="header-wrapper">
              <span className="header-line">
                <span className="header-cap">A</span>
                <span className="header-mobile">otearoa</span>
              </span>
              <span className="header-line">
                <span className="header-cap">D</span>
                <span className="header-mobile">igital</span>
              </span>
              <span className="header-line">
                <span className="header-cap">A</span>
                <span className="header-mobile">rts</span>
              </span>
              <span className="header-line header-mobile">Network</span>
            </div>
          </div>
          <img className="header-bg" src={bg} alt="ada floating orbs" />
        </div>
      ) : (
        <></>
      )}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  .header-homepage {
    padding: 2rem 1rem;
    min-height: 100vh;
    overflow: hidden;
  }

  .header-info {
    pointer-events: none;
    user-select: none;
    min-height: calc(100vh - 6rem);
    position: relative;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header-bg {
    pointer-events: none;
    width: calc(100vw - 4rem);
    min-height: calc(100vh - 6rem);
    position: absolute;
    inset: 3rem 2rem;
    image-rendering: pixelated;
    mix-blend-mode: multiply;
  }

  .header-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0.9;
    animation: fade-in 800ms 1 ease-out 500ms both;

    span {
      display: inline-block;
      text-align: center;
    }

    .header-line:nth-child(1) {
      animation: font-loader 1500ms 1 normal 1000ms both;
    }
    .header-line:nth-child(2) {
      animation: font-loader 1500ms 1 normal 2000ms both;
    }
    .header-line:nth-child(3) {
      animation: font-loader 1500ms 1 normal 3000ms both;
    }
    .header-line:nth-child(4) {
      font-size: 3rem;
      animation: font-loader 1500ms 1 normal 4000ms both;
    }

    .header-cap {
      font-size: 55vw;
    }

    .header-mobile {
      display: none;
    }
  }

  @media screen and (min-width: 940px) {
    .header-info {
      max-height: calc(100vh - 6rem);
    }

    .header-bg {
      inset: 4rem 2rem;
      overflow: hidden;
      max-height: calc(100vh - 6rem);
      animation: zoom-in 1000ms 1 cubic-bezier(0, 0, 0.01, 0.97) 300ms both;
    }

    .header-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;

      .header-line {
        display: flex;
        flex-wrap: nowrap;
      }

      span {
        font-size: 12vw !important;
      }

      .header-mobile {
        display: inline-block;
      }
    }
  }

  @media (prefers-reduced-motion) {
    .header-bg {
      display: none;
    }
  }
`

export default Header
