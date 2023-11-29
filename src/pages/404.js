import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <NotFoundContainer>
        <h1>404</h1>
        <p>
          Please bear with us while we migrate the ADA network to our new
          website
        </p>
        <div className="button-wrapper">
          <Link to="/" className="button-cta button-cta-primary">
            HOME
          </Link>
          <Link to="/tag" className="button-cta">
            SEARCH
          </Link>
        </div>
      </NotFoundContainer>
    </Layout>
  )
}

const NotFoundContainer = styled.section`
  /* min-height: 50vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: var(--spacing-10);
  padding: var(--spacing-4);
  animation: fade-in 800ms 1 ease-out 300ms both;

  h1 {
    animation: font-loader 1500ms 1 normal 1000ms both;
    font-size: 45vw;
    margin: 0;
    line-height: 0.8;
  }

  @media screen and (min-width: 940px) {
    margin-top: 0;
    min-height: calc(100vh - 120px);
  }
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
