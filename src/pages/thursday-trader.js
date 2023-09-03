import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"


const GameTemplate = () => {

  return (
    <Layout>
        <GameTemplateContent>
      <div>
        <div className="container">
        <div className="content">
        <p>hello world</p>
        </div>
        </div>
      </div>
        </GameTemplateContent>
    </Layout>
  )
}

const GameTemplateContent = styled.section`
  h2 {
    font-size: 1.8rem;
    @media screen and (min-width: 940px) {
      font-size: 3.4rem;
    }
  }

  .container {
    color: black;
    display: flex;
    align-content: center; 
    justify-content: center;
    min-height: 100vh;

    .content {
        padding: 1rem 20% 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    min-width: 60vw;
    }

  }

  
`

export default GameTemplate

