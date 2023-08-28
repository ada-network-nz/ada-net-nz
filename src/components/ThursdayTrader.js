import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import TempThursdayImage from "../assets/temp-thursday-trader.png"

const ThursdayTrader = () => {
  return (
    <ThursdayTraderContent>
      <div id="info">
        <h2>—Featured Artist --- Ekare</h2>
        <Link to="/thursday-trader/">
          <h3>---READ ON</h3>
        </Link>
      </div>

      <Link to="/thursday-trader/">
        <div class="container">
          <img
            className="temp-thursday-image"
            src={TempThursdayImage}
            alt="the thursday trader title image"
          />
        </div>
      </Link>
      {/* must solve x-frames issue */}
      {/* <div id="gameTable">
          <iframe
            src="/ThursdayTrader/index_thursday.html"
            title="thursday_trader"
            style={{ width: "100vw", height: "100vh" }}
          ></iframe>
        </div> */}
    </ThursdayTraderContent>
  )
}

export default ThursdayTrader

const ThursdayTraderContent = styled.section`
  h2 {
    font-size: 1.5rem;
    @media screen and (min-width: 940px) {
      font-size: 3.4rem;
    }
  }
  h3 {
    color: #859508;
  }

  .container {
    color: black;
    display: grid;
    min-height: 70vh;
    width: 100%;
    display: flex;

    @media screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }
    .temp-thursday-image {
      width: 100%;
    }
  }
  #info {
    padding: 1rem 15% 1rem;
    display: flex;
    flex-direction: column;
  }
`
