import React from "react"
import styled from "styled-components"


const ThursdayTrader = () => {

  return (
    <ThursdayTraderContent >
      <div id="info">
        <h2>—Featured Artist --- Ekare</h2>
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
  #game-table {
    padding: 1rem;
    display: none;
    height: 400px;
    width: 400px;
  }
`
