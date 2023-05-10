import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import IndexLibrary from "../components/indexLibrary"
import IndexEvent from "../components/indexEvent"
import IndexArtbase from "../components/indexArtbase"
import ThursdayTrader from "../components/ThursdayTrader"

const Home = () => {

  return (
    <Layout isHomePage>
      <Seo title="Homepage" />
      <ThursdayTrader />
      <IndexLibrary />
      <IndexEvent />
      <IndexArtbase />
    </Layout>
  )
}

export default Home

