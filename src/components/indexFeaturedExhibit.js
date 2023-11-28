import React from "react"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import Helmet from "react-helmet"
import styled from "styled-components"

const FeaturedExhibit = () => {
  // xi li  query GetId($id: String = "cG9zdDo5Nzgx")

  return (
    <Content id="info">
      <h2>Featured Artist — Xi Li 李曦</h2>
      {/* ---------old version - works in local for testing
              src="https://player.vimeo.com/video/879621293?h=14b0d660b3&color=dec78c" */}
      <div className="center">
        <iframe
          src="https://player.vimeo.com/video/883875650?h=0521838bdf&badge=0autopause=0quality_selector=1&player_id=0&app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
          allowfullscreen
          title="Xi Li李曦, ↪︎I↩︎ (Within Web of Mask), 2023"
        ></iframe>
      </div>
      <div className="center">
        <div className="info">
          <p>
            Xi Li 李曦 - <span style={{ fontFamily: "math" }}>↪︎I↩︎</span>{" "}
            (Within Web of Mask), 2023
          </p>
          <Link
            className="button-cta button-cta-primary"
            to="/artbase/xi-li-within-web-of-mask/"
            key="cG9zdDo5ODEw"
          >
            View more
          </Link>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </Content>
  )
}

export default FeaturedExhibit

const Content = styled.section`
  padding: var(--spacing-6) var(--spacing-4);

  h2 {
    color: inherit;
    text-align: center;
    margin-bottom: var(--spacing-2);
  }

  iframe {
    width: 100%;
  }

  .info {
    margin-top: var(--spacing-3);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 940px) {
    padding: var(--spacing-8) var(--spacing-6);

    iframe {
      width: 92vw;
      height: 70vh;
      margin: 0 auto;
    }
  }
`
