import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"

const FeaturedExhibit = () => {
  return (
    <Content>
      <div id="info">
        <h2>—Featured Artist --- Xi Li</h2>
        <Link to="/thursday-trader/">
          <h3>---READ ON</h3>
        </Link>
      </div>
      <div class="container">
        <html>
          <body>
            {/* <iframe
              src="https://player.vimeo.com/video/879621293"
              width="50"
              height="50"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe> */}
            <iframe
              src="https://player.vimeo.com/video/879621293?h=14b0d660b3&color=dec78c"
              width="640"
              height="274"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/879621293">
                Xi Li 李曦 - ↪︎I↩︎, 2023 [VR] [360&deg; video]
              </a>{" "}
              from <a href="https://vimeo.com/xili">Xi Li</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>

            <script src="https://player.vimeo.com/api/player.js"></script>
            <script>
              {/* <!- Your Vimeo SDK player script goes here -> */}
            </script>
          </body>
        </html>
      </div>
      {/* <Helmet>
        <script src="/ThursdayTrader/x-frame-bypass.js" type="module"></script>
        <script src="//unpkg.com/@ungap/custom-elements"></script>
      </Helmet>
      <div id="info">
        <h2>—Featured Artist --- E-Kare</h2>
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
      </div> */}
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
