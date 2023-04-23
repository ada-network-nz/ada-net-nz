import React from "react"
import styled from "styled-components"

const ThursdayTrader = () => {

  return (
    <ThursdayTraderContent>

        <h2>Game Page</h2>
   
      <div class="container">
      <div id="gameTable">
        <iframe src ='/ThursdayTrader/index_thursday.html' title="thursday_trader" style={{width:'800px',height:'600px'}}></iframe>
      </div>
      </div>
    </ThursdayTraderContent>
  )
}

export default ThursdayTrader

const ThursdayTraderContent = styled.section`
  h2 {
    font-size: 1.8rem;
    @media screen and (min-width: 940px) {
      font-size: 3.4rem;
    }
  }

  .container {
    color: black;
    display: grid;
    min-height: 100vh;

    @media screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }

  }

`
