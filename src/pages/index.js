import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import IndexLibrary from "../components/indexLibrary"
import IndexEvent from "../components/indexEvent"
import IndexArtbase from "../components/indexArtbase"

const Home = () => {

  return (
    <Layout isHomePage>
      <Seo title="Homepage" />
      <IndexLibrary />
      <IndexEvent />
      <IndexArtbase />
    </Layout>
  )
}

export default Home

const TempSymposium = styled.section`
  height: 80vh;
  position: relative;
  background: #00fe28;

  @media screen and (min-width: 940px) {
    /* height: calc(100vh - 36px); */
    height: auto;
  }

  .symposium-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .symposium-link {
    /* position: absolute; */
    margin-top: auto;
    bottom: 1rem;
    /* z-index: 666; */
    display: block;
  }

  img {
    width: 100%;
    /* padding: 3rem 1rem; */
  }

  h2 {
    margin: 0 0 2rem 1rem;
    font-size: 2rem;
    @media screen and (min-width: 940px) {
      text-align: center;
    }
  }
`
