import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import IndexLibrary from "../components/indexLibrary"
import IndexEvent from "../components/indexEvent"
import IndexArtbase from "../components/indexArtbase"
import IndexRandom from "../components/indexRandom"

const Home = () => {

  return (
    <Layout isHomePage>
      <Seo title="Homepage" />
      <IndexLibrary />
      <IndexEvent />
      <IndexArtbase />
      <IndexRandom />
    </Layout>
  )
}

export default Home

