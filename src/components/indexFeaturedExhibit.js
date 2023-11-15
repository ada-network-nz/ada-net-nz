import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
// import Helmet from "react-helmet"
import styled from "styled-components"

const FeaturedExhibit = () => {  

// xi li  query GetId($id: String = "cG9zdDo5Nzgx")

  return (
    <Content>
      <div id="info">
        <h2>Featured Artist -- Xi Li 李曦 </h2>
          <Link to="/artbase/xi-li-within-web-of-mask/" key="cG9zdDo5ODEw">
          <CTA>--READ ON</CTA>
        </Link>
      </div>
      <div class="container">
       {/* ---------old version - works in local for testing
              src="https://player.vimeo.com/video/879621293?h=14b0d660b3&color=dec78c" */}
        <iframe
       
          src="https://player.vimeo.com/video/883875650?h=0521838bdf&badge=0autopause=0quality_selector=1&player_id=0&app_id=58479"
          style={{
            width: "100vw",
            height: "85vh",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
          allowfullscreen
          title="Xi Li李曦, ↪︎I↩︎ (Within Web of Mask), 2023"
        ></iframe>
      </div>
      <div
          style={{
            fontSize: "1.5em",
            textAlign: "center",
            margin: "5px",
            borderBottom: "2px solid #859508"
          }}
        >
          <p>Xi Li 李曦 - <span style={{fontFamily: "math",}}>↪︎I↩︎</span> (Within Web of Mask), 2023</p>
      
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </Content>
  )
}

export default FeaturedExhibit

const Content = styled.section`
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
    min-height: 60vh;

    @media screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  #info {
    padding: 1rem 15% 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`
const CTA = styled.button`
   {
    font-size: 1rem;
    display: flex;
    background: black;
    padding: 0.2rem 0.8rem;
    text-align: center;
    color: #e5f950;
    border: 1px solid #e5f950;
    box-shadow: 4px 4px 0 #e5f950;
    border-radius: 1rem;
    margin-bottom: 10px;

    &:hover {
      color: black;
      background-color: #859508;
    }
  }
`
