import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"

const ThursdayTrader = () => {
  return (
    <ThursdayTraderContent>
      <Helmet>
        <script src="/ThursdayTrader/x-frame-bypass.js" type="module"></script>
      </Helmet>
      <div id="info">
        <h2>—Featured Artist --- Ekare</h2>
        <Link to="/thursday-trader/">
          <h3>---READ ON</h3>
        </Link>
      </div>
      <div class="container">
        <div id="gameTable">
          <iframe
            is="x-frame-bypass"
            src="/ThursdayTrader/index_thursday.html"
            title="thursday_trader"
            style={{ width: "100vw", height: "100vh" }}
          ></iframe>
        </div>
      </div>
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
    @media screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  #info {
    padding: 1rem 15% 1rem;
    display: flex;
    flex-direction: column;
  }
`
