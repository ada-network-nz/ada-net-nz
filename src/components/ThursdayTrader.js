import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ThursdayTrader = () => {
  // need the actual post id for thurs trader docs
  const data = useStaticQuery(graphql`
    {
      wpPost(id: { eq: "cG9zdDo4MTY1" }) {
        id
        uri
      }
    }
  `)
  return (
    <ThursdayTraderContent>
      <div class="container">
        <div id="gameTable">
          <iframe
            src="/ThursdayTrader/index_thursday.html"
            title="thursday_trader"
            style={{ width: "100vw", height: "80vh" }}
          ></iframe>
        </div>
        <div className="info">
        <h4>—Featured Artist --- Ekare</h4>
        <h2>The Thursday Trader</h2>
          <Link to={data.wpPost.uri} key={data.wpPost.id}>
            —LEARN MORE
          </Link>
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
    .info {
      padding: 1rem 15% 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
`
