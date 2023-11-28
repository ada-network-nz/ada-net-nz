import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import Header from "./header"

import Footer from "./footer"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <main>
      <Navigation isHomePage={isHomePage} />

      <Header title={title} isHomePage={isHomePage} />

      <div
        id="content-home"
        className="global-wrapper"
        data-is-root-path={isHomePage}
      >
        {children}

        <Footer />
      </div>
    </main>
  )
}

export default Layout
